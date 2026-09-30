/**
 * A henna vine that runs down the left edge of the timeline. It is generated
 * to the exact height of its host, and grows as the page is scrolled: the
 * stem draws itself and leaves, paisleys and flowers open as it reaches them.
 */
const NS = 'http://www.w3.org/2000/svg';
const W = 28;
const CX = 14;
const AMP = 3.5;
const STEP = 58;
const S = 1.25;            // drawn at 1.25x
const STROKE = '#cf8f96';

const el = (name, attrs = {}, parent) => {
  const n = document.createElementNS(NS, name);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(n);
  return n;
};

// small deterministic random, so the vine is the same on every load
const rng = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/* ornaments are drawn at the origin, pointing along +x */
const leaf = (g, len, wid) => {
  el('path', {
    d: `M0 0 C${len * 0.3} ${-wid} ${len * 0.75} ${-wid * 0.9} ${len} 0 C${len * 0.75} ${wid * 0.9} ${len * 0.3} ${wid} 0 0 Z`,
    fill: 'rgba(233,183,180,.38)', stroke: STROKE, 'stroke-width': 0.9, 'stroke-linejoin': 'round',
  }, g);
  el('path', { d: `M1 0 L${len * 0.78} 0`, fill: 'none', stroke: STROKE, 'stroke-width': 0.6, opacity: 0.8 }, g);
};
const paisley = (g) => {
  el('path', {
    d: 'M0 0 C2 -5 9 -6 11 -1 C12.5 3 9 6.5 5.5 5 C3 4 3.5 1 5.5 1.3 C7 1.6 7.4 3.4 6.2 3.8',
    fill: 'rgba(233,183,180,.3)', stroke: STROKE, 'stroke-width': 0.9, 'stroke-linecap': 'round',
  }, g);
  el('circle', { cx: 9, cy: -1.5, r: 0.9, fill: STROKE }, g);
};
const flower = (g) => {
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    el('circle', { cx: Math.cos(a) * 3.6, cy: Math.sin(a) * 3.6, r: 1.9, fill: 'rgba(233,183,180,.5)', stroke: STROKE, 'stroke-width': 0.7 }, g);
  }
  el('circle', { r: 1.5, fill: STROKE }, g);
};

export function createVine(host, { reduce = false } = {}) {
  const wrap = document.createElement('div');
  wrap.className = 'vine';
  wrap.setAttribute('aria-hidden', 'true');
  host.prepend(wrap);

  let svg = null, stem = null, len = 0, H = 0, progress = reduce ? 1 : 0;
  let items = [];

  const build = () => {
    const px = Math.max(150, Math.round(host.offsetHeight - 40));
    H = px / S;                                   // height in drawing units
    wrap.style.height = `${px}px`;
    wrap.textContent = '';
    items = [];
    svg = el('svg', { width: W * S, height: px, viewBox: `0 0 ${W} ${H}`, overflow: 'visible' }, wrap);
    const r = rng(11);

    const n = Math.max(2, Math.floor((H - 24) / STEP));
    const nodes = [];
    for (let i = 0; i <= n; i++) {
      nodes.push({ x: CX + (i % 2 ? AMP : -AMP), y: 10 + ((H - 20) * i) / n, s: i % 2 ? 1 : -1 });
    }
    let d = `M${CX} 0 L${nodes[0].x} ${nodes[0].y}`;
    for (let i = 0; i < n; i++) {
      const a = nodes[i], b = nodes[i + 1], my = (a.y + b.y) / 2;
      d += ` C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
    }
    stem = el('path', { d, fill: 'none', stroke: STROKE, 'stroke-width': 1.1, 'stroke-linecap': 'round' }, svg);
    len = stem.getTotalLength();
    stem.style.strokeDasharray = len;
    stem.style.strokeDashoffset = len;

    const kinds = ['leaf', 'leaf', 'paisley', 'leaf', 'flower', 'leaf'];
    nodes.forEach((nd, i) => {
      const kind = kinds[i % kinds.length];
      const outer = el('g', { transform: `translate(${nd.x} ${nd.y}) scale(0)` }, svg);
      const sway = el('g', { class: 'vine__sway' }, outer);
      sway.style.animationDelay = `${-(r() * 5).toFixed(2)}s`;
      sway.style.animationDuration = `${(4 + r() * 2.5).toFixed(2)}s`;
      // the outward side is where the stem bends away from the centre line
      const flip = nd.s < 0 ? 180 : 0;
      const jitter = (r() - 0.5) * 16;
      if (kind === 'leaf') {
        const g = el('g', { transform: `rotate(${flip + (nd.s < 0 ? -1 : 1) * (28 + jitter)})` }, sway);
        leaf(g, 8 + r() * 2.5, 2.6 + r() * 0.8);
        if (i % 2 === 0) {
          for (let k = 0; k < 2; k++) el('circle', { cx: CX - nd.x + (r() - 0.5) * 2, cy: 12 + k * 6, r: 0.9, fill: STROKE }, sway);
        }
      } else if (kind === 'paisley') {
        paisley(el('g', { transform: `rotate(${flip + (nd.s < 0 ? -1 : 1) * 20})` }, sway));
      } else {
        flower(el('g', { transform: `translate(${(CX - nd.x) * 0.2} 0)` }, sway));
        leaf(el('g', { transform: `rotate(${flip + (nd.s < 0 ? -1 : 1) * 60})` }, sway), 7, 2.3);
      }
      items.push({ el: outer, y: nd.y, x: nd.x, t: -1 });
    });
    apply();
  };

  const apply = () => {
    if (!stem) return;
    const head = progress * H;
    stem.style.strokeDashoffset = (len * (1 - Math.min(1, head / H))).toFixed(1);
    for (const it of items) {
      const t = Math.max(0, Math.min(1, (head - it.y + 8) / 46));
      const e = t * t * (3 - 2 * t);
      if (Math.abs(e - it.t) < 0.004) continue;
      it.t = e;
      it.el.setAttribute('transform', `translate(${it.x} ${it.y}) scale(${e.toFixed(3)})`);
    }
  };

  build();
  if (typeof ResizeObserver !== 'undefined') {
    let raf = 0;
    new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { if (Math.abs(host.offsetHeight - 40 - H * S) > 6) build(); });
    }).observe(host);
  }

  return {
    set(p) { progress = Math.max(0, Math.min(1, p)); apply(); },
    get progress() { return progress; },
  };
}
