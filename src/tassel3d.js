import * as THREE from 'three';

/**
 * A silk tassel modelled in its own units (the same 70 x 170 box as the flat
 * artwork). Origin = top of the cord, y grows downward as negative y.
 * `swingG` rotates around the origin; the skirt follows a little later,
 * which is what makes it read as a heavy, soft object.
 */
const silk = (() => {
  let tex;
  return () => {
    if (tex) return tex;
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 4;
    const g = c.getContext('2d');
    for (let x = 0; x < c.width; x++) {
      const v = 90 + Math.random() * 150;
      g.fillStyle = `rgb(${v},${v},${v})`;
      g.fillRect(x, 0, 1, c.height);
    }
    tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.set(2, 1);
    return tex;
  };
})();

export function buildTassel() {
  const root = new THREE.Group();
  const swingG = new THREE.Group();
  const skirtG = new THREE.Group();
  root.add(swingG);
  skirtG.position.y = -60;
  swingG.add(skirtG);

  const head = new THREE.MeshStandardMaterial({ color: '#e6b0ae', roughness: 0.55, bumpMap: silk(), bumpScale: 1.2, emissive: '#e6b0ae', emissiveIntensity: 0.4 });
  const collar = new THREE.MeshStandardMaterial({ color: '#c98387', roughness: 0.6, emissive: '#c98387', emissiveIntensity: 0.35 });
  const skirt = new THREE.MeshStandardMaterial({ color: '#e9b7b4', roughness: 0.5, bumpMap: silk(), bumpScale: 2.2, side: THREE.DoubleSide, emissive: '#e9b7b4', emissiveIntensity: 0.45 });
  const cordM = new THREE.MeshStandardMaterial({ color: '#c98f93', roughness: 0.6, emissive: '#c98f93', emissiveIntensity: 0.4 });

  // cord loop
  const loop = new THREE.Mesh(new THREE.TorusGeometry(5, 0.9, 8, 28), cordM);
  loop.scale.set(0.75, 2.4, 1);
  loop.position.y = -13;
  swingG.add(loop);

  // head
  const hp = [];
  for (let i = 0; i <= 28; i++) {
    const a = (i / 28) * Math.PI;
    hp.push(new THREE.Vector2(Math.max(0.01, 15 * Math.sin(a)), -(40 - 16 * Math.cos(a))));
  }
  swingG.add(new THREE.Mesh(new THREE.LatheGeometry(hp, 40), head));

  // collar, wound with thread
  const col = new THREE.Mesh(new THREE.CylinderGeometry(12.6, 12.6, 11, 48, 1), collar);
  col.position.y = -57.5;
  swingG.add(col);
  for (let i = 0; i < 6; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(12.9, 0.55, 6, 48), collar);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -53 - i * 1.8;
    swingG.add(ring);
  }

  // skirt: lathe, hung from the collar, with a fringe of loose strands
  const R = (t) => 11.5 + 17.5 * Math.pow((t - 63) / 103, 0.85);
  const sp = [];
  for (let i = 0; i <= 30; i++) {
    const t = 63 + (103 * i) / 30;
    sp.push(new THREE.Vector2(R(t), -(t - 60)));
  }
  const skirtMesh = new THREE.Mesh(new THREE.LatheGeometry(sp, 96), skirt);
  skirtG.add(skirtMesh);

  const pts = [];
  for (let i = 0; i < 260; i++) {
    const a = Math.random() * Math.PI * 2;
    const t0 = 146 + Math.random() * 14;
    const t1 = 166 + 3 + Math.random() * 10;
    const r0 = R(t0) * (0.97 + Math.random() * 0.05);
    const r1 = R(166) * (0.98 + Math.random() * 0.1) + (t1 - 166) * 0.1;
    pts.push(Math.cos(a) * r0, -(t0 - 60), Math.sin(a) * r0, Math.cos(a) * r1, -(t1 - 60), Math.sin(a) * r1);
  }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  skirtG.add(new THREE.LineSegments(fg, new THREE.LineBasicMaterial({ color: '#d39a9b', transparent: true, opacity: 0.75 })));

  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });

  // physics: a pendulum for the whole tassel, another following it for the skirt
  const st = { th: 0, om: 0, th2: 0, om2: 0 };
  return {
    root,
    kick(v) { st.om += v; },
    tick(dt, t, tilt = 0, amp = 1.6) {
      const target = tilt + amp * Math.sin(t * 1.05);
      st.om += (-16 * (st.th - target) - 1.5 * st.om) * dt;
      st.th = Math.max(-28, Math.min(28, st.th + st.om * dt));
      st.om2 += (-9 * (st.th2 - st.th) - 1.1 * st.om2) * dt;
      st.th2 += st.om2 * dt;
      const rad = Math.PI / 180;
      swingG.rotation.z = -st.th * rad;
      swingG.rotation.x = 0.05 * Math.sin(t * 0.8 + 1);
      skirtG.rotation.z = -(st.th2 - st.th) * 0.7 * rad;
    },
  };
}

/** A small stand-alone WebGL view of the tassel (used as the RSVP send control). */
export function createTasselView(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 84 / 180, 10, 3000);
  camera.position.set(0, -102, 640);
  const t = buildTassel();
  scene.add(t.root);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xf3ddd7, 1.5));
  const sun = new THREE.DirectionalLight(0xfff4ee, 2.2);
  sun.position.set(-120, 60, 220);
  scene.add(sun);

  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(84, 180, false);
  };
  size();
  return {
    kick: t.kick,
    render(dt, time, tilt) { t.tick(dt, time, tilt); renderer.render(scene, camera); },
    dispose() { renderer.dispose(); },
  };
}
