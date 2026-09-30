/**
 * The living background: a 2D canvas above the page (below the paper grain)
 * with drifting rose petals and specks of warm dust. Near petals move more
 * than far ones when the page scrolls, which gives the page depth.
 */
const PALETTE = ['#e9b7b4', '#dc9ea3', '#f2cbc8', '#f8dcd6', '#cf8f96'];
const DUST = ['#d8ae8a', '#e2a8a6', '#ffffff', '#f0c9a8'];

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

export function createAmbient({ canvas }) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2d unavailable');
  let w = 0, h = 0, dpr = 1;
  let parts = [];
  let lastScroll = scrollY;
  const api = { intensity: 1 };

  const petal = (fromTop) => {
    const z = rand(0.25, 1);
    return {
      kind: 'petal', z,
      x: rand(-20, w + 20), y: fromTop ? rand(-60, -10) : rand(-20, h + 20),
      s: 5 + z * 9,
      rot: rand(0, 6.28), spin: rand(-0.9, 0.9),
      flip: rand(0, 6.28), flipV: rand(1.2, 2.8),
      fall: 14 + z * 26, sway: rand(10, 26), ph: rand(0, 6.28),
      color: pick(PALETTE), a: 0.36 + z * 0.44,
    };
  };
  const speck = () => ({
    kind: 'dust', z: rand(0.2, 1),
    x: rand(0, w), y: rand(0, h),
    r: rand(0.7, 1.9), ph: rand(0, 6.28), tw: rand(0.6, 1.6),
    vy: -rand(3, 9), color: pick(DUST), a: rand(0.35, 0.8),
  });

  const fill = () => {
    const petals = Math.max(9, Math.min(22, Math.round((w * h) / 30000)));
    const dust = Math.max(18, Math.min(44, Math.round((w * h) / 14000)));
    parts = parts.filter((p) => p.life);          // keep any burst in progress
    for (let i = 0; i < petals; i++) parts.push(petal(false));
    for (let i = 0; i < dust; i++) parts.push(speck());
  };

  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    parts = [];
    fill();
  };
  size();

  const drawPetal = (p) => {
    const f = Math.cos(p.flip);
    const sx = Math.max(0.18, Math.abs(f));
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.scale(sx, 1);
    ctx.beginPath();
    ctx.moveTo(0, -p.s);
    ctx.bezierCurveTo(p.s * 0.95, -p.s * 0.45, p.s * 0.7, p.s * 0.85, 0, p.s);
    ctx.bezierCurveTo(-p.s * 0.7, p.s * 0.85, -p.s * 0.95, -p.s * 0.45, 0, -p.s);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha * (f > 0 ? 1 : 0.8);
    ctx.fill();
    ctx.restore();
  };

  /** Petals thrown from a point (used when an answer is sent). */
  api.burst = (x, y, n = 30) => {
    for (let i = 0; i < n; i++) {
      const p = petal(false);
      const a = rand(-Math.PI * 0.95, -Math.PI * 0.05);
      const v = rand(90, 300);
      Object.assign(p, {
        x, y, z: 1, s: rand(4, 9), a: rand(0.55, 0.9),
        vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rand(2.4, 4), age: 0,
      });
      parts.push(p);
    }
  };

  // phones fire resize while the address bar slides; only rebuild on a real change
  api.resize = () => { if (innerWidth !== w || Math.abs(innerHeight - h) > 120) size(); };

  api.frame = (dt, time) => {
    const dScroll = scrollY - lastScroll;
    lastScroll = scrollY;
    const wind = Math.sin(time * 0.23) * 14 + Math.sin(time * 0.61 + 1.3) * 6;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const k = api.intensity;
    if (k <= 0.01) return;

    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      if (p.kind === 'dust') {
        p.ph += dt * p.tw;
        p.y += p.vy * dt - dScroll * (0.08 + p.z * 0.3);
        p.x += Math.sin(p.ph * 0.7) * 5 * dt + wind * 0.2 * dt;
        if (p.y < -6) { p.y = h + 6; p.x = rand(0, w); }
        else if (p.y > h + 6) { p.y = -6; p.x = rand(0, w); }
        ctx.globalAlpha = k * p.a * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(p.ph * 2.2)));
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fill();
        continue;
      }

      p.flip += p.flipV * dt;
      p.rot += p.spin * dt;
      if (p.life) {                                   // burst petal: thrown, then it drifts down
        p.age += dt;
        p.vx *= 1 - Math.min(1, dt * 1.6);
        p.vy += (60 - p.vy) * Math.min(1, dt * 1.4);
        p.x += p.vx * dt + Math.sin(time * 2 + p.ph) * 12 * dt;
        p.y += p.vy * dt;
        const left = 1 - p.age / p.life;
        if (left <= 0 || p.y > h + 20) { parts.splice(i, 1); continue; }
        p.alpha = k * p.a * Math.min(1, left * 2);
      } else {
        p.y += p.fall * dt - dScroll * (0.12 + p.z * 0.45);
        p.x += (Math.sin(time * 0.9 + p.ph) * p.sway + wind * (0.4 + p.z * 0.6)) * dt;
        if (p.y > h + 24) { Object.assign(p, petal(true)); }
        else if (p.y < -60) { p.y = h + 20; p.x = rand(0, w); }
        if (p.x < -40) p.x = w + 30; else if (p.x > w + 40) p.x = -30;
        p.alpha = k * p.a;
      }
      drawPetal(p);
    }
    ctx.globalAlpha = 1;
  };

  api.dispose = () => { parts = []; };
  return api;
}
