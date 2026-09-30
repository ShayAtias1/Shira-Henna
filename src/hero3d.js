import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { buildTassel } from './tassel3d.js';
import { K, CX, CY, HALF, TRUNKS, BRANCHES, CLUSTER, BLOSSOMS, HAMSA, HAMSA_PLACE, TASSEL_SCALE } from './art.js';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const loader = new SVGLoader();

const svgPaths = (d) => loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`).paths[0];
const sample = (d, div = 14) => svgPaths(d).subPaths.map((sp) => sp.getPoints(div));
const mirror = (p) => ({ x: 2 * CX - p.x, y: p.y });
const flat = (pts, z = 0) => pts.flatMap((p) => [(p.x - CX) * K, (CY - p.y) * K, z]);

function paperNoise() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const img = g.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 128 + (Math.random() - 0.5) * 90;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  return t;
}

/**
 * The hero invitation as a real 3D object: a die-cut paper card, engraved
 * lines that draw themselves, GPU blossoms, an embossed Hamsa and a silk
 * tassel. `state` is animated from outside (GSAP); everything else is derived.
 */
export function createHeroScene({ canvas, frameEl, reduce }) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  const FOV = 30;
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 60);
  const card = new THREE.Group();
  scene.add(card);

  /* lights: soft, from the upper left, like a window */
  scene.add(new THREE.HemisphereLight(0xffffff, 0xf3ddd7, 1.3));
  const sun = new THREE.DirectionalLight(0xfff4ee, 1.5);
  sun.position.set(-1.8, 2.8, 4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.radius = 10;
  sun.shadow.blurSamples = 16;
  sun.shadow.bias = -0.0006;
  Object.assign(sun.shadow.camera, { left: -3, right: 3, top: 4, bottom: -4, near: 0.5, far: 12 });
  scene.add(sun);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 20),
    new THREE.ShadowMaterial({ color: 0x7d424d, opacity: 0.22, transparent: true }),
  );
  ground.position.z = -0.32;
  ground.receiveShadow = true;
  scene.add(ground);

  /* ---- the card: the silhouette extruded, with paper grain ---- */
  const half = sample(HALF, 18)[0];
  const right = half.map((p) => ({ x: p.x, y: p.y }));
  const leftRev = half.map(mirror).reverse();
  const outline = right.concat(leftRev.slice(1, -1));
  const shape = new THREE.Shape(outline.map((p) => new THREE.Vector2((p.x - CX) * K, (CY - p.y) * K)));
  const depth = 0.035;
  const paperGeo = new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2, curveSegments: 1,
  });
  const paperMat = new THREE.MeshStandardMaterial({
    color: '#fbf0ec', roughness: 0.94, bumpMap: paperNoise(), bumpScale: 0.35, transparent: true,
    emissive: '#fbf0ec', emissiveIntensity: 0.28,
  });
  const paper = new THREE.Mesh(paperGeo, paperMat);
  paper.position.z = -(depth + 0.006);
  paper.castShadow = true;
  card.add(paper);

  /* ---- engraved lines (drawn with instanceCount: no repaint, no jank) ---- */
  const mats = [];
  const lineMat = (color, width, opacity = 1) => {
    const m = new LineMaterial({ color, linewidth: width, transparent: true, opacity, worldUnits: false });
    m.userData.base = width;
    mats.push(m);
    return m;
  };
  const line = (pts, mat, z) => {
    const g = new LineGeometry();
    g.setPositions(flat(pts, z));
    const l = new Line2(g, mat);
    l.computeLineDistances();
    l.userData.n = pts.length - 1;
    l.geometry.instanceCount = 0;
    l.renderOrder = 2;
    card.add(l);
    return l;
  };

  const outerMat = lineMat('#c98f93', 1.6);
  const innerMat = lineMat('#c98f93', 1.0);
  const treeMat = lineMat('#c4888d', 1.15);
  const hamsaMat = lineMat('#b0646e', 1.7);
  const hamsaInMat = lineMat('#c4888d', 0.9);

  const outerLines = [line(half, outerMat, 0.003), line(half.map(mirror), outerMat, 0.003)];
  const scaleIn = (p) => ({ x: CX + (p.x - CX) * 0.93, y: CY + (p.y - CY) * 0.93 });
  const innerLines = [line(half.map(scaleIn), innerMat, 0.003), line(half.map(mirror).map(scaleIn), innerMat, 0.003)];

  /* trees: every segment of every trunk and branch, sorted bottom to top so the
     whole thing climbs as the count grows */
  const segs = [];
  const addPath = (d) => sample(d, 14).forEach((pts) => {
    for (let i = 0; i < pts.length - 1; i++) segs.push([pts[i], pts[i + 1]]);
  });
  TRUNKS.forEach(addPath);
  addPath(BRANCHES);
  const both = segs.concat(segs.map(([a, b]) => [mirror(a), mirror(b)]));
  both.sort((s, t) => (t[0].y + t[1].y) - (s[0].y + s[1].y));
  const treePos = new Float32Array(both.length * 6);
  both.forEach(([a, b], i) => {
    treePos.set([(a.x - CX) * K, (CY - a.y) * K, 0.012, (b.x - CX) * K, (CY - b.y) * K, 0.012], i * 6);
  });
  const treeGeo = new LineSegmentsGeometry();
  treeGeo.setPositions(treePos);
  treeGeo.instanceCount = 0;
  const trees = new LineSegments2(treeGeo, treeMat);
  trees.renderOrder = 2;
  trees.frustumCulled = false;
  card.add(trees);
  const treeN = both.length;

  /* ---- blossoms: one instanced quad per dot, bloomed by a shader ---- */
  const dots = [];
  for (const [x, y, s] of BLOSSOMS) {
    for (const mx of [false, true]) {
      const px = mx ? 2 * CX - x : x;
      CLUSTER.forEach(([dx, dy, r, a], i) => {
        dots.push([px + (mx ? -dx : dx) * s, y + dy * s, r * s, a, i]);
      });
    }
  }
  const n = dots.length;
  const iPos = new Float32Array(n * 3);
  const iData = new Float32Array(n * 3);
  dots.forEach(([x, y, r, a], i) => {
    iPos.set([(x - CX) * K, (CY - y) * K, 0.03 + Math.random() * 0.01], i * 3);
    const delay = clamp((400 - y) / 340, 0, 1) * 0.72 + Math.random() * 0.22;
    iData.set([r * K, a, delay], i * 3);
  });
  const bg = new THREE.InstancedBufferGeometry();
  const quad = new THREE.PlaneGeometry(2, 2);
  bg.index = quad.index;
  bg.setAttribute('position', quad.getAttribute('position'));
  bg.setAttribute('iPos', new THREE.InstancedBufferAttribute(iPos, 3));
  bg.setAttribute('iData', new THREE.InstancedBufferAttribute(iData, 3));
  bg.instanceCount = n;
  const bloomMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: {
      uBloom: { value: 0 }, uTime: { value: 0 },
      uColor: { value: new THREE.Color('#d99fa4') }, uColor2: { value: new THREE.Color('#ebbcbc') },
    },
    vertexShader: `
      attribute vec3 iPos; attribute vec3 iData;
      uniform float uBloom, uTime;
      varying vec2 vUv; varying float vA;
      float backOut(float t){ float c1 = 1.70158, c3 = c1 + 1.; return 1. + c3 * pow(t - 1., 3.) + c1 * pow(t - 1., 2.); }
      void main() {
        float t = clamp((uBloom - iData.z) / 0.16, 0., 1.);
        float pop = t <= 0. ? 0. : backOut(t);
        vUv = position.xy;
        vA = iData.y * smoothstep(0., .4, t);
        vec3 p = iPos;
        p.xy += vec2(sin(uTime * .7 + iData.z * 37.), cos(uTime * .6 + iData.z * 23.)) * .002;
        p.xy += position.xy * iData.x * pop;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
      }`,
    fragmentShader: `
      uniform vec3 uColor, uColor2;
      varying vec2 vUv; varying float vA;
      void main() {
        float d = length(vUv);
        float a = smoothstep(1., .8, d) * vA;
        if (a < .01) discard;
        vec3 c = mix(uColor2, uColor, smoothstep(0., 1., d));
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
      }`,
  });
  const blossoms = new THREE.Mesh(bg, bloomMat);
  blossoms.frustumCulled = false;
  blossoms.renderOrder = 3;
  card.add(blossoms);

  /* ---- the Hamsa: rose line first, then the relief rises out of the paper ---- */
  const hp = HAMSA_PLACE;
  const hpt = (p, k = 1) => ({ x: hp.x + (32 + (p.x - 32) * k) * hp.s, y: hp.y + (40 + (p.y - 40) * k) * hp.s });
  const hamsaPts = sample(HAMSA, 12)[0];
  const hamsaLine = line(hamsaPts.map((p) => hpt(p)), hamsaMat, 0.03);
  const hamsaIn = line(hamsaPts.map((p) => hpt(p, 0.8)), hamsaInMat, 0.03);
  const hShapes = svgPaths(HAMSA).toShapes(true);
  const hGeo = new THREE.ExtrudeGeometry(hShapes, {
    depth: 2.2, bevelEnabled: true, bevelThickness: 0.9, bevelSize: 0.7, bevelSegments: 3, curveSegments: 12,
  });
  const relief = new THREE.Mesh(hGeo, new THREE.MeshStandardMaterial({
    color: '#fbf0ec', roughness: 0.94, emissive: '#fbf0ec', emissiveIntensity: 0.3,
  }));
  const sx = K * hp.s;
  relief.scale.set(sx, -sx, 0.0001);
  relief.position.set((hp.x - CX) * K, (CY - hp.y) * K, 0.004);
  relief.castShadow = true;
  relief.visible = false;
  card.add(relief);

  /* ---- the tassel ---- */
  const tassel = buildTassel();
  const tipY = (CY - 446) * K;
  tassel.root.scale.setScalar(TASSEL_SCALE);
  tassel.root.position.set(0, tipY + 5 * K, 0.035);
  tassel.root.visible = false;
  card.add(tassel.root);

  /* ---- a few drifting petals for depth ---- */
  const pn = 40;
  const pPos = new Float32Array(pn * 3);
  const pSeed = new Float32Array(pn);
  for (let i = 0; i < pn; i++) {
    pPos.set([(Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 4.6, 0.12 + Math.random() * 0.5], i * 3);
    pSeed[i] = Math.random();
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pg.setAttribute('seed', new THREE.BufferAttribute(pSeed, 1));
  const petalMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 }, uPx: { value: 1 }, uColor: { value: new THREE.Color('#e3a9ae') } },
    vertexShader: `
      attribute float seed; uniform float uTime, uPx; varying float vS;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * (.05 + seed * .06) + 2.3, 4.6) - 2.3;
        p.x += sin(uTime * .5 + seed * 30.) * .12;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (3. + seed * 5.) * uPx / max(.5, -mv.z) * 3.5;
        vS = seed;
      }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uAlpha; varying float vS;
      void main() {
        float d = length(gl_PointCoord - .5) * 2.;
        float a = smoothstep(1., .7, d) * uAlpha * (.35 + vS * .35);
        if (a < .01) discard;
        gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }`,
  });
  const petals = new THREE.Points(pg, petalMat);
  petals.frustumCulled = false;
  petals.renderOrder = 4;
  card.add(petals);

  /* ---- state, layout, loop ---- */
  const state = { outer: 0, inner: 0, trees: 0, bloom: 0, hamsaLine: 0, hamsaRise: 0, paper: 0, tassel: 0, petals: 0, scroll: 0 };
  const view = { w: 1, h: 1, cx: 0, cy: 0, fw: 340, d0: 6, zoom: 1.16 };
  const env = { tx: 0, ty: 0, tilt: 0 };
  const tiltOut = { rx: 0, ry: 0 };
  let dpr = 1;

  const layout = () => {
    const r = canvas.getBoundingClientRect();
    const fr = frameEl.getBoundingClientRect();
    view.w = Math.max(1, r.width);
    view.h = Math.max(1, r.height);
    view.fw = fr.width;
    view.cx = fr.left - r.left + fr.width / 2;
    view.cy = fr.top - r.top + fr.height / 2;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(view.w, view.h, false);
    camera.aspect = view.w / view.h;
    const t = Math.tan((FOV * Math.PI) / 360);
    view.d0 = view.h / (t * view.fw);
    view.zoom = Math.min(1.16, (view.w * 0.985) / view.fw);
    mats.forEach((m) => m.resolution.set(view.w, view.h));
    petalMat.uniforms.uPx.value = dpr * view.h / 800;
  };

  const frame = (dt, time) => {
    const p = state.scroll;
    const e = smooth(0, 0.4, p);
    const zoom = 1 + (view.zoom - 1) * e;
    camera.position.set(0, 0, view.d0 / zoom);
    camera.lookAt(0, 0, 0);
    camera.setViewOffset(view.w, view.h, view.w / 2 - view.cx, view.h / 2 - view.cy, view.w, view.h);

    /* tilt: pointer, gyro and a slow breath */
    const breathe = reduce ? 0 : Math.sin(time * 0.45) * 0.6;
    tiltOut.ry = env.tx * 5 + breathe;
    tiltOut.rx = -env.ty * 3.5 + breathe * 0.5 - e * 2.5;
    card.rotation.y = (tiltOut.ry * Math.PI) / 180;
    card.rotation.x = (tiltOut.rx * Math.PI) / 180;

    /* draw progress */
    outerLines.forEach((l) => { l.geometry.instanceCount = Math.round(state.outer * l.userData.n); });
    innerLines.forEach((l) => { l.geometry.instanceCount = Math.round(state.inner * l.userData.n); });
    treeGeo.instanceCount = Math.round(state.trees * treeN);
    hamsaLine.geometry.instanceCount = Math.round(state.hamsaLine * hamsaLine.userData.n);
    hamsaIn.geometry.instanceCount = Math.round(state.hamsaLine * hamsaIn.userData.n);
    relief.visible = state.hamsaRise > 0.001;
    relief.scale.z = sx * state.hamsaRise + 0.0001;

    paperMat.opacity = state.paper;
    ground.material.opacity = 0.22 * state.paper;
    bloomMat.uniforms.uBloom.value = state.bloom;
    bloomMat.uniforms.uTime.value = time;
    petalMat.uniforms.uTime.value = time;
    petalMat.uniforms.uAlpha.value = state.petals * (1 - smooth(0.3, 0.6, p));

    /* lines get a touch heavier as we move in */
    const w = 1 + 0.6 * e;
    mats.forEach((m) => { m.linewidth = m.userData.base * w; });

    tassel.root.visible = state.tassel > 0.001;
    tassel.root.scale.setScalar(TASSEL_SCALE * Math.max(0.0001, state.tassel));
    tassel.tick(dt, time, env.tilt);

    renderer.render(scene, camera);
  };

  layout();
  return {
    state, tiltOut, env, view,
    layout,
    frame,
    kick: (v) => tassel.kick(v),
    dispose() { renderer.dispose(); },
  };
}
