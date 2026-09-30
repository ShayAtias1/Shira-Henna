import * as THREE from 'three';

/**
 * A sheer white curtain hanging behind the page. It is drawn by a shader (at
 * reduced resolution, it is all soft light) over the blush background:
 *   - two panels of pleated voile, the back one fainter, so it reads as cloth
 *     you can see through,
 *   - the cloth is fixed at the top and free below, so it sways more toward
 *     the hem, and the pleats fan out a little as they fall,
 *   - the flanks of each fold that face the window catch the light and the
 *     ones that face away fall into a soft rose shadow,
 *   - a breeze moves it; scrolling fast and tilting the phone stir it too.
 */
const VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uT, uScroll, uWind;
uniform vec2 uTilt;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

/* one panel of cloth: returns (height, slope) of the pleats at this point */
vec2 cloth(vec2 p, float yy, float t, float freq, float seed) {
  float free = smoothstep(0.0, 1.0, yy);                       /* fixed at the rod, free below */
  float x = p.x
    + free * (0.028 * sin(yy * 3.1 + t * 0.9 + seed) + 0.015 * sin(yy * 7.0 - t * 1.4 + seed * 1.7))
    + free * uWind * 0.02 * sin(yy * 5.0 - t * 2.2);
  float spread = 1.0 / (0.8 + 0.3 * yy);                        /* pleats open up toward the hem */
  float irregular = 0.55 * sin(x * 4.0 + seed * 3.0) + 0.25 * free * sin(yy * 4.0 - t * 0.8 + seed);
  float ph = freq * x * spread + seed + irregular;
  float h = sin(ph) + 0.3 * sin(2.0 * ph + 1.2);                /* round crests, tighter valleys */
  float dh = (cos(ph) + 0.6 * cos(2.0 * ph + 1.2)) * freq * spread;
  return vec2(h, dh);
}

/* colour and opacity of a panel; c.a is premultiplied later */
vec4 panel(vec2 p, float yy, float t, float freq, float seed, float sheer) {
  vec2 c = cloth(p, yy, t, freq, seed);
  vec3 n = normalize(vec3(-c.y * 0.03, 0.0, 1.0));
  float facing = dot(n, normalize(vec3(-0.6, 0.25, 0.75)));        /* +: toward the window */
  float flank = clamp(abs(c.y) / (freq * 1.5), 0.0, 1.0);          /* steep parts, where layers overlap */
  float valley = smoothstep(0.2, -1.0, c.x);

  vec3 lit = vec3(1.0, 0.995, 0.985);
  vec3 shade = vec3(0.90, 0.76, 0.75);
  float lightK = smoothstep(-0.25, 0.35, facing - 0.66 + 0.25);
  vec3 col = mix(shade, lit, lightK);
  col = mix(col, shade * 0.97, valley * 0.35);

  float a = (0.13 + 0.3 * flank + 0.1 * (1.0 - valley) * lightK) * sheer;
  a += valley * 0.06 * sheer;
  return vec4(col, a);
}

void main() {
  float asp = uRes.x / uRes.y;
  vec2 p = vec2((vUv.x - 0.5) * asp, vUv.y - 0.5) + vec2(uTilt.x * 0.015, 0.0);
  float yy = 1.0 - vUv.y;
  float t = uT * 0.5;
  float f = 30.0;

  vec4 back = panel(p + vec2(0.07, 0.0), yy, t * 0.85, f * 0.78, 2.4, 0.62);
  vec4 front = panel(p, yy, t, f, 0.0, 1.0);

  float a = front.a + back.a * (1.0 - front.a);
  vec3 col = (front.rgb * front.a + back.rgb * back.a * (1.0 - front.a)) / max(a, 0.001);

  /* the weave */
  a *= 0.94 + 0.09 * vnoise(gl_FragCoord.xy * 0.55);
  a = clamp(a, 0.0, 0.9);

  gl_FragColor = vec4(col * a, a);      /* premultiplied */
}
`;

export function createBackdrop(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  const uniforms = {
    uRes: { value: new THREE.Vector2(1, 1) },
    uT: { value: 0 }, uScroll: { value: 0 }, uWind: { value: 0 },
    uTilt: { value: new THREE.Vector2() },
  };
  const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, depthTest: false, depthWrite: false });
  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
  const mesh = new THREE.Mesh(tri, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);

  let quality = 0.75;
  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr * quality);
    renderer.setSize(canvas.clientWidth || innerWidth, canvas.clientHeight || innerHeight, false);
    renderer.getDrawingBufferSize(uniforms.uRes.value);
  };
  size();

  return {
    uniforms,
    resize() { size(); },
    /** slow device: draw the curtain at a lower resolution */
    lighten() { if (quality > 0.4) { quality = 0.4; size(); } },
    render(time) { uniforms.uT.value = time; renderer.render(scene, camera); },
    dispose() { renderer.dispose(); tri.dispose(); mat.dispose(); },
  };
}
