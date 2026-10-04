import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createHeroScene } from './hero3d.js';
import { createAmbient } from './ambient.js';
import { createVine } from './vine.js';
import { createBackdrop } from './bg3d.js';

gsap.registerPlugin(ScrollTrigger);
// a phone's address bar sliding in and out fires resize; that must not re-layout the page
ScrollTrigger.config({ ignoreMobileResize: true });

const cfg = window.SITE || {};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isLocal = ['localhost', '127.0.0.1', '[::1]', ''].includes(location.hostname) || location.hostname.endsWith('.localhost');
const buzz = (ms) => { try { if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(ms); } catch { /* not supported */ } };
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
};

/* Background music begins with the first guest interaction. */
const music = $('[data-music]');
const musicToggle = $('[data-music-toggle]');
if (cfg.MUSIC_URL) {
  music.src = cfg.MUSIC_URL;
  music.volume = 0.35;
  musicToggle.hidden = false;
  const paintMusic = () => {
    musicToggle.setAttribute('aria-pressed', String(!music.paused));
    musicToggle.setAttribute('aria-label', music.paused ? 'הפעלת מוזיקת רקע' : 'השתקת מוזיקת רקע');
  };
  const playMusic = () => music.play().catch(paintMusic);
  const beginMusic = (event) => {
    if (event.type === 'keydown' && !['Enter', ' ', 'Tab'].includes(event.key)) return;
    if (event.target.closest('[data-music-toggle]')) return;
    document.removeEventListener('pointerdown', beginMusic);
    document.removeEventListener('keydown', beginMusic);
    playMusic();
  };
  musicToggle.addEventListener('click', () => {
    document.removeEventListener('pointerdown', beginMusic);
    document.removeEventListener('keydown', beginMusic);
    if (music.paused) playMusic(); else music.pause();
  });
  music.addEventListener('play', paintMusic);
  music.addEventListener('pause', paintMusic);
  music.addEventListener('error', () => { musicToggle.hidden = true; });
  document.addEventListener('pointerdown', beginMusic);
  document.addEventListener('keydown', beginMusic);
}

/* ------------------------------------------------------------------
   Input that moves things: pointer on desktop, tilt on phones
------------------------------------------------------------------ */
const env = { tx: 0, ty: 0, tilt: 0 };
const target = { tx: 0, ty: 0, tilt: 0 };
if (!reduce) {
  addEventListener('deviceorientation', (e) => {
    if (typeof e.gamma !== 'number') return;
    target.tx = clamp(e.gamma / 25, -1, 1);
    target.ty = clamp(((e.beta || 50) - 50) / 25, -1, 1);
    target.tilt = clamp(-e.gamma * 0.5, -14, 14);
  }, { passive: true });
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    target.tx = (e.clientX / innerWidth - 0.5) * 2;
    target.ty = (e.clientY / innerHeight - 0.5) * 2;
    target.tilt = target.tx * 4;
  }, { passive: true });
}

/* ------------------------------------------------------------------
   Smooth scrolling: Lenis drives the scroll, GSAP ScrollTrigger reads it
------------------------------------------------------------------ */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const el = $(a.getAttribute('href'));
  if (!el) return;
  if (el.id === 'rsvp') {
    e.preventDefault();
    const top = $('#hero').offsetTop + innerHeight * 1.65;
    if (lenis) lenis.scrollTo(top, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else window.scrollTo({ top, behavior: 'auto' });
    return;
  }
  if (!lenis) return;
  e.preventDefault();
  lenis.scrollTo(el, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
}));

/* ------------------------------------------------------------------
   HERO: a 3D paper card that draws itself. If WebGL is unavailable the
   flat SVG version (same layers, CSS animation) takes over.
------------------------------------------------------------------ */
const hero = $('#hero');
const els = {
  frame: $('.frame'), tilt: $('.tilt'), invite: $('.invite'), count: $('.count'), htassel: $('.hero__tassel'),
  cue: $('.cue'), blessing: $('.blessing'), paper: $('.hero__paper'),
  pre: $('.a-pre'), name: $('.a-name'), lines: $$('.a-t1, .a-t2, .a-t3, .a-t4, .a-t5, .a-t6'), cueIn: $('.a-cue'),
};

let scene = null;
hero.classList.add('hero--3d');
try {
  scene = createHeroScene({ canvas: $('.hero__gl'), frameEl: els.frame, reduce });
  $('.hero__gl').addEventListener('webglcontextlost', (e) => { e.preventDefault(); toFlat(); });
} catch (err) {
  console.warn('[hero] 3D unavailable, using the flat version', err);
  hero.classList.remove('hero--3d');
}
function toFlat() {
  scene = null;
  hero.classList.remove('hero--3d');
  hero.classList.add('go', 'is-skip');
}

let intro = null;
const introMs = 10800;
let introBegan = 0;

const buildIntro = () => {
  const S = scene.state;
  gsap.set(els.lines, { y: 14 });
  gsap.set(els.name, { opacity: 1, clipPath: 'inset(-20% 100% -20% -5%)' });
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
  tl.to(els.pre, { opacity: 1, duration: 1, ease: 'sine.out' }, 0.2)
    .to(S, { outer: 1, duration: 2.2, ease: 'power2.inOut' }, 0.8)
    .to(S, { inner: 1, duration: 2.2, ease: 'power2.inOut' }, 1.3)
    .to(S, { paper: 1, duration: 1.4, ease: 'sine.inOut' }, 2.8)
    .to(S, { trees: 1, duration: 2.4, ease: 'power1.out' }, 3.0)
    .to(S, { bloom: 1, duration: 2.2, ease: 'sine.inOut' }, 4.1)
    .to(S, { hamsaLine: 1, duration: 1.4, ease: 'power2.inOut' }, 5.3)
    .to(S, { hamsaRise: 1, duration: 1.1, ease: 'power2.out' }, 6.3)
    .to(els.name, { clipPath: 'inset(-20% -5% -20% -5%)', duration: 1.3, ease: 'power3.inOut' }, 6.4)
    .to(els.lines, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.2 }, 7.2)
    .to(S, { tassel: 1, duration: 2, ease: 'elastic.out(1, 0.45)' }, 8.4)
    .to(S, { petals: 1, duration: 2 }, 8.6)
    .to(els.cueIn, { opacity: 1, duration: 1 }, 10);
  return tl;
};

const finishIntro = () => {
  if (!intro) return;
  if (performance.now() - introBegan < introMs) intro.timeScale(14);
};

const startIntro = () => {
  if (introBegan) return;
  introBegan = performance.now();
  if (scene) {
    intro = buildIntro();
    if (scrollY > 60 || reduce) intro.progress(1); else intro.play();
  } else {
    hero.classList.add('go');
    if (scrollY > 60 || reduce) hero.classList.add('is-skip');
  }
};
Promise.race([document.fonts && document.fonts.ready, new Promise((r) => setTimeout(r, 1400))]).then(startIntro);
['pointerdown', 'wheel', 'keydown', 'touchmove'].forEach((ev) => hero.addEventListener(ev, () => {
  if (scene) finishIntro(); else if (performance.now() - introBegan < introMs) hero.classList.add('is-skip');
}, { passive: true }));
addEventListener('scroll', () => { if (scrollY > 40 && introBegan) { if (scene) finishIntro(); else hero.classList.add('is-skip'); } }, { passive: true });

/* countdown: calendar days in Israel */
(() => {
  const num = $('[data-count-num]'), pre = $('[data-count-pre]'), unit = $('[data-count-unit]');
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(new Date());
  const [y, m, d] = today.split('-').map(Number);
  const [ey, em, ed] = (cfg.EVENT_DATE || '2026-10-28').split('-').map(Number);
  const n = Math.round((Date.UTC(ey, em - 1, ed) - Date.UTC(y, m - 1, d)) / 864e5);
  if (n > 1) { num.textContent = n; pre.textContent = 'עוד'; unit.textContent = 'ימים עד החינה'; }
  else if (n === 1) { num.textContent = 'מחר'; pre.textContent = ''; unit.textContent = 'נפגשות בחינה'; }
  else if (n === 0) { num.textContent = 'היום'; pre.textContent = ''; unit.textContent = 'החינה של שירה. נתראה בערב'; }
  else { num.textContent = 'תודה'; pre.textContent = ''; unit.textContent = 'שהייתן איתי'; }
})();

/* hero scroll progress, smoothed */
let heroTarget = 0, heroP = 0, heroVisible = true, frameCy = 0;
ScrollTrigger.create({
  trigger: hero, start: 'top top', end: 'bottom bottom',
  onUpdate: (s) => { heroTarget = s.progress; },
  onRefresh: (s) => { heroTarget = s.progress; heroP = s.progress; },
});
new IntersectionObserver((en) => { heroVisible = en[0].isIntersecting; }, { rootMargin: '120px' }).observe(hero);

const measure = () => { frameCy = els.frame.offsetTop + els.frame.offsetHeight / 2; };
measure();

const applyHero = (p, tiltRx, tiltRy, zoomMax) => {
  const cardP = Math.min(1, p * 2);
  const e = smooth(0, 0.4, cardP);
  const z = 1 + (zoomMax - 1) * e;
  els.tilt.style.transform = `perspective(900px) rotateX(${(-tiltRx).toFixed(2)}deg) rotateY(${tiltRy.toFixed(2)}deg) scale(${z.toFixed(4)})`;

  const gone = smooth(0.03, 0.22, cardP);
  els.invite.style.opacity = (1 - gone).toFixed(3);
  els.invite.style.transform = `translate3d(0, ${(-24 * gone).toFixed(1)}px, 0)`;

  const cin = smooth(0.22, 0.5, cardP);
  const cout = smooth(0.55, 0.65, p);
  els.count.style.opacity = (cin * (1 - cout)).toFixed(3);
  els.count.style.transform = `translate3d(0, calc(-50% + ${((1 - cin) * 18 - cout * 24).toFixed(1)}px), 0)`;

  const rin = smooth(0.60, 0.72, p);
  rsvpSection.style.opacity = rin.toFixed(3);
  rsvpSection.style.transform = `translate3d(0, ${((1 - rin) * 18).toFixed(1)}px, 0)`;
  rsvpSection.style.pointerEvents = rin > 0.95 ? 'auto' : 'none';
  rsvpSection.inert = rin < 0.95;
  pull.inert = rin < 0.95 || state.step !== '3';

  els.cue.style.opacity = (1 - smooth(0.02, 0.1, cardP)).toFixed(3);
  els.blessing.style.opacity = (1 - smooth(0.05, 0.2, cardP)).toFixed(3);

  if (!scene) {
    els.frame.style.transform = `scale(${z.toFixed(4)})`;
    els.htassel.style.transform = `scale(${z.toFixed(4)})`;
    els.htassel.style.transformOrigin = `50% ${(-els.frame.offsetHeight).toFixed(1)}px`;
  }
};

/* ------------------------------------------------------------------
   Everything below the hero
------------------------------------------------------------------ */
const threaded = $('.threaded');
if (!reduce) {
  gsap.fromTo(threaded, { '--tp': 0 }, {
    '--tp': 1, ease: 'none',
    scrollTrigger: { trigger: threaded, start: 'top 60%', end: 'bottom 60%', scrub: 0.3 },
  });
  ScrollTrigger.batch($$('.reveal'), {
    start: 'top 90%', once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', overwrite: true }),
  });
} else {
  threaded.style.setProperty('--tp', 1);
}
$$('.threaded .bead').forEach((b) => {
  if (b.classList.contains('bead--full')) return;
  if (reduce) { b.classList.add('on'); return; }
  ScrollTrigger.create({ trigger: b, start: 'top 60%', onEnter: () => b.classList.add('on'), onLeaveBack: () => b.classList.remove('on') });
});

/* the henna vine grows down the timeline as it is scrolled */
const vine = createVine(threaded, { reduce });
if (!reduce) {
  const vp = { p: 0 };
  ScrollTrigger.create({
    trigger: threaded, start: 'top 62%', end: 'bottom 62%',
    onUpdate: (s) => gsap.to(vp, { p: s.progress, duration: 0.5, ease: 'power2.out', overwrite: true, onUpdate: () => vine.set(vp.p) }),
    onRefresh: (s) => { vp.p = s.progress; vine.set(vp.p); },
  });
}

/* the living background: drifting light, petals and dust */
const ambientEl = $('.ambient');
const glows = $('.ambient__glows');
let ambient = null;
if (!reduce) {
  try { ambient = createAmbient({ canvas: $('.petals') }); } catch (err) { console.warn('[ambient] off', err); }
}
let washShown = -1;
/* a sheer white curtain that moves in the breeze, over the soft glows */
let backdrop = null;
try {
  backdrop = createBackdrop($('.ambient__gl'));
  document.documentElement.classList.add('has-bg');
} catch (err) { console.warn('[backdrop] off', err); }
let windV = 0, lastSY = scrollY, groundMix = -1;
const rsvpSection = $('#rsvp');
/* ------------------------------------------------------------------
   RSVP: one question at a time, the botanicals are the progress bar
------------------------------------------------------------------ */
const root = $('[data-rsvp]');
const form = $('[data-form]');
const steps = $$('.step', form);
const statusEl = $('[data-status]');
const nameInput = $('#guest-name');
const pull = $('[data-pull]');
const tassel = $('[data-tassel]');
const hint = $('[data-sendhint]');
const tapsend = $('[data-tapsend]');
const cord = $('.pull__cord');
const gmFade = $('[data-gm-fade]');
const gmSolid = $('[data-gm-solid]');

const tasselView = null;

/* One device can answer for several people, so nothing is pre-filled or locked.
   Each full name keeps its own id, and answering again for the same name updates
   that guest's row instead of adding a new one. */
const newId = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
const ids = store.get('shira-rsvp-ids') || {};
const nameKey = (n) => n.replace(/\s+/g, ' ').trim().toLowerCase();
const state = { id: '', name: '', going: null, count: 1, busy: false, step: '1' };

const edge = { 1: 350, 2: 260, 3: 150, done: -90, idle: 480 };
const grow = { y: edge.idle };
const setGrow = () => { gmFade.setAttribute('y', grow.y); gmSolid.setAttribute('y', grow.y + 70); };
const growTo = (y, ms = 1.3) => {
  gsap.killTweensOf(grow);
  if (reduce || ms === 0) { grow.y = y; setGrow(); return; }
  gsap.to(grow, { y, duration: ms, ease: 'power3.out', onUpdate: setGrow });
};
setGrow();

let seen = false;
new IntersectionObserver((entries) => {
  if (seen || !entries[0].isIntersecting) return;
  seen = true;
  growTo(edge[state.step]);
}, { threshold: 0.3 }).observe(root);

let rsvpVisible = false;
new IntersectionObserver((en) => { rsvpVisible = en[0].isIntersecting; }, { rootMargin: '150px' }).observe(root);

const guestText = (n) => (n <= 1 ? 'רק את' : n === 2 ? 'את ועוד אורחת אחת' : `את ועוד ${n - 1} אורחות`);

const paint = () => {
  $$('[data-name]').forEach((el) => { el.textContent = state.name.split(' ')[0]; });
  $('[data-count]').textContent = state.count;
  $('[data-count-text]').textContent = guestText(state.count);
  $$('[data-if]').forEach((el) => { el.hidden = el.dataset.if !== state.going; });
  $('[data-sendhint-text]').textContent = 'משכי את הגדיל לשליחה';
};

const armPull = (on) => {
  pull.classList.toggle('is-armed', on);
  tassel.tabIndex = on ? 0 : -1;
  pull.inert = !on || heroP < 0.72;
  if (on) tapsend.textContent = 'או לחצי לשליחה';
};

const show = (name, { focus = true, instant = false } = {}) => {
  state.step = String(name);
  steps.forEach((s) => { s.hidden = s.dataset.step !== state.step; });
  root.dataset.stage = state.step;
  paint();
  armPull(state.step === '3');
  statusEl.textContent = '';
  if (seen || instant) growTo(edge[state.step], instant ? 0 : 1.3);
  if (!focus) return;
  const cur = steps.find((s) => !s.hidden);
  const el = state.step === 'done' ? cur : cur.querySelector('input, button');
  el && el.focus({ preventScroll: true });
};

const say = (msg, node) => {
  statusEl.textContent = '';
  if (node) statusEl.append(node); else statusEl.textContent = msg;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (state.step !== '1') return;
  const v = nameInput.value.trim().replace(/\s+/g, ' ');
  if (v.split(' ').filter((w) => w.length > 1).length < 2) { say('כתבי שם פרטי ושם משפחה כדי שנדע מי הגיעה'); nameInput.focus(); return; }
  state.name = v.slice(0, 40);
  state.id = ids[nameKey(state.name)] || newId();
  show(2);
});

$$('[data-going]', form).forEach((b) => b.addEventListener('click', () => {
  state.going = b.dataset.going;
  if (state.going === 'no') state.count = 0; else if (!state.count) state.count = 1;
  show(3);
}));

$('[data-inc]').addEventListener('click', () => { state.count = Math.min(9, state.count + 1); paint(); });
$('[data-dec]').addEventListener('click', () => { state.count = Math.max(1, state.count - 1); paint(); });
$$('[data-back]', form).forEach((b) => b.addEventListener('click', () => show(Number(state.step) - 1)));
$('[data-edit]').addEventListener('click', () => show(2));
$('[data-another]').addEventListener('click', () => {
  Object.assign(state, { id: '', name: '', going: null, count: 1 });
  nameInput.value = '';
  show(1);
});

const post = async (payload) => {
  const url = cfg.RSVP_ENDPOINT;
  if (!url) {
    if (isLocal) { await new Promise((r) => setTimeout(r, 700)); console.info('[RSVP demo] not sent, RSVP_ENDPOINT is empty:', payload); return; }
    throw new Error('no-endpoint');
  }
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 12000);
  try {
    if (cfg.RSVP_MODE === 'webhook') {
      // Make / Zapier style hooks: a plain form post (no preflight), reply not readable.
      // fetch only throws if the request never left, so no throw = sent.
      await fetch(url, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(payload), signal: ctl.signal });
      return;
    }
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), signal: ctl.signal });
    const json = await res.json().catch(() => null);
    if (!res.ok || !json || json.ok !== true) throw new Error('bad-response');
  } finally { clearTimeout(timer); }
};

const petals = () => {
  if (reduce) return;
  for (let i = 0; i < 16; i++) {
    const el = document.createElement('span');
    el.className = 'petal';
    el.style.setProperty('--x', `${20 + Math.random() * 60}%`);
    el.style.setProperty('--s', `${5 + Math.random() * 6}px`);
    el.style.setProperty('--dx', `${(Math.random() - 0.5) * 120}px`);
    el.style.setProperty('--dy', `${260 + Math.random() * 300}px`);
    el.style.setProperty('--d', `${2.4 + Math.random() * 1.6}s`);
    el.style.setProperty('--dl', `${Math.random() * 0.9}s`);
    root.appendChild(el);
    setTimeout(() => el.remove(), 5200);
  }
};

const tapLabel = tapsend.textContent;
const submit = async () => {
  if (state.busy || state.step !== '3') return;
  state.busy = true;
  tapsend.disabled = true;
  statusEl.textContent = '';
  const payload = {
    id: state.id, name: state.name, going: state.going,
    count: state.going === 'yes' ? state.count : 0,
    website: form.elements.website.value,
    sentAt: new Date().toISOString(),
  };
  // Optimistic: the thank-you appears the moment the tassel is pulled, the network round trip
  // (slow on a phone) happens behind it. If it fails, the guest is taken back to try again.
  const sending = post(payload);
  ids[nameKey(state.name)] = state.id;
  store.set('shira-rsvp-ids', ids);
  show('done');
  if (state.going === 'yes') { petals(); ambient && ambient.burst(innerWidth / 2, innerHeight * 0.55); buzz(18); }
  try {
    await sending;
    tapsend.textContent = tapLabel;
  } catch (err) {
    console.warn('[RSVP] failed', err);
    let link = null;
    if (cfg.WHATSAPP_URL) {
      link = document.createElement('span');
      link.append('לא הצלחנו לשלוח. אפשר לנסות שוב או ');
      const a = document.createElement('a');
      a.href = cfg.WHATSAPP_URL; a.textContent = 'לכתוב לשירה בוואטסאפ';
      link.append(a);
    }
    show(3);
    say('לא הצלחנו לשלוח כרגע, אפשר לנסות שוב.', link);
    tapsend.textContent = 'ניסיון נוסף';
  } finally {
    state.busy = false;
    tapsend.disabled = false;
  }
};
tapsend.addEventListener('click', submit);

/* pulling the tassel sends the answer (keyboard: Enter or Space) */
const kickTassels = (v) => { scene && scene.kick(v); tasselView && tasselView.kick(v); };
(() => {
  const MAX = 110, THRESH = 58;
  let startY = 0, dy = 0, dragging = false, moved = false;
  const apply = (v) => {
    dy = v;
    if (scene) {
      gsap.to(scene.state, { pull: v, duration: v ? 0 : 0.6, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' });
    } else {
      tassel.style.transform = `translate3d(0, ${v.toFixed(1)}px, 0)`;
    }
    cord.style.transform = `scaleY(${(v / 120).toFixed(3)})`;
  };
  tassel.addEventListener('pointerdown', (e) => {
    if (!pull.classList.contains('is-armed') || state.busy) return;
    dragging = true; moved = false; startY = e.clientY;
    pull.classList.remove('is-spring');
    pull.classList.add('is-drag');
    tassel.setPointerCapture(e.pointerId);
  });
  tassel.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const raw = Math.max(0, e.clientY - startY);
    if (raw > 6) moved = true;
    apply(Math.min(MAX, raw * 0.85));
    kickTassels(raw * 0.002);
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    pull.classList.remove('is-drag');
    pull.classList.add('is-spring');
    const send = dy >= THRESH;
    apply(0);
    kickTassels(send ? 6 : 3);
    if (send) { buzz(12); submit(); }
  };
  tassel.addEventListener('pointerup', end);
  tassel.addEventListener('pointercancel', end);
  tassel.addEventListener('click', () => {
    if (!pull.classList.contains('is-armed')) return;
    if (moved) { moved = false; return; }
    if (event.detail === 0) { submit(); return; }   // keyboard
    kickTassels(3);                                  // a plain tap just tugs it
    hint.animate([{ opacity: 1 }, { opacity: 0.35 }, { opacity: 1 }], { duration: 700 });
  });
})();

show(1, { focus: false, instant: true });

/* ------------------------------------------------------------------
   One loop for everything that moves every frame
------------------------------------------------------------------ */
class DomSwing {
  constructor(el) { this.el = el; this.th = 0; this.om = 0; this.ph = Math.random() * 6; }
  step(dt, t) {
    const a = -16 * (this.th - (env.tilt + 1.6 * Math.sin(t * 1.05 + this.ph))) - 1.5 * this.om;
    this.om += a * dt;
    this.th = clamp(this.th + this.om * dt, -28, 28);
    this.el.style.transform = `rotate(${this.th.toFixed(2)}deg)`;
  }
  kick(v) { this.om += v; }
}
const domSwings = reduce ? [] : $$('[data-swing]')
  .filter((el) => !(el.closest('.hero__tassel') && scene) && !(el.closest('.pull') && tasselView))
  .map((el) => new DomSwing(el));

let lastY = scrollY;
const onScrollKick = () => {
  const dy = scrollY - lastY;
  lastY = scrollY;
  if (reduce || !dy) return;
  const v = clamp(dy, -50, 50) * 0.025 * (Math.sin(scrollY / 90) > 0 ? 1 : -1);
  kickTassels(v);
  domSwings.forEach((s) => s.kick(v));
};
addEventListener('scroll', onScrollKick, { passive: true });

let slow = 0, lightened = false;
gsap.ticker.add((time, dtms) => {
  const dt = Math.min(0.033, dtms / 1000);
  // if the phone cannot keep up, quietly make the background cheaper
  if (!lightened && time > 4) {
    slow = dtms > 26 ? slow + 1 : Math.max(0, slow - 1);
    if (slow > 40) { lightened = true; backdrop && backdrop.lighten(); ambient && ambient.lighten(); }
  }
  const k = 1 - Math.exp(-dt * 6);
  env.tx += (target.tx - env.tx) * k;
  env.ty += (target.ty - env.ty) * k;
  env.tilt += (target.tilt - env.tilt) * k;

  heroP = reduce ? heroTarget : heroP + (heroTarget - heroP) * (1 - Math.exp(-dt * 9));

  const wash = smooth(0.3, 0.62, Math.min(1, heroP * 2));
  if (Math.abs(wash - washShown) > 0.002) { washShown = wash; ambientEl.style.setProperty('--wash', wash.toFixed(3)); }
  {
    // the room turns from paper to the deeper blush as the answer form arrives
    const gm = smooth(0.60, 0.72, heroP);
    if (Math.abs(gm - groundMix) > 0.002) { groundMix = gm; ambientEl.style.setProperty('--gm', gm.toFixed(3)); }
  }
  if (backdrop) {
    const u = backdrop.uniforms;
    windV += (Math.min(1, Math.abs(scrollY - lastSY) / Math.max(dt * 1000, 1) * 0.01) - windV) * (1 - Math.exp(-dt * 2.5));
    lastSY = scrollY;
    u.uWind.value = windV;
    u.uScroll.value = scrollY / innerHeight;
    u.uTilt.value.set(env.tx, env.ty);
    backdrop.render(time);
  }
  if (ambient) {
    glows.style.transform = `translate3d(0, ${(Math.sin(scrollY / 950) * 7).toFixed(2)}vh, 0)`;
    ambient.intensity = 0.3 + 0.7 * smooth(0.08, 0.5, heroP);
    ambient.frame(dt, time);
  }

  if (heroVisible) {
    if (scene) {
      scene.env.tx = env.tx; scene.env.ty = env.ty; scene.env.tilt = env.tilt;
      scene.state.scroll = Math.min(1, heroP * 2);

      scene.frame(dt, time);
      applyHero(heroP, scene.tiltOut.rx, scene.tiltOut.ry, scene.view.zoom);
    } else {
      const fw = els.frame.offsetWidth || 340;
      applyHero(heroP, 0, 0, Math.min(1.16, (innerWidth * 0.985) / fw));
    }
  }
  if (rsvpVisible && tasselView) tasselView.render(dt, time, env.tilt);
  for (const s of domSwings) s.step(dt, time);
});

/* layout changes */
let resizeRaf = 0, lastW = innerWidth, lastH = innerHeight;
addEventListener('resize', () => {
  // on touch screens ignore height-only changes (the address bar), they are what made the page jump
  const sameWidth = innerWidth === lastW;
  if (sameWidth && Math.abs(innerHeight - lastH) < 200 && matchMedia('(pointer: coarse)').matches) return;
  lastW = innerWidth; lastH = innerHeight;
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(() => { measure(); scene && scene.layout(); ambient && ambient.resize(); backdrop && backdrop.resize(); ScrollTrigger.refresh(); });
});
document.fonts && document.fonts.ready.then(() => { measure(); scene && scene.layout(); ScrollTrigger.refresh(); });

window.__shira = { scene, gsap, ambient, vine, get intro() { return intro; } };
