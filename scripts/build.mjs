// Bundles src/ into site/app.js (three.js, GSAP and Lenis are inlined).
// Usage: npm run build   |   npm run dev (watches)
import { build, context } from 'esbuild';

export const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020', 'safari15'],
  outfile: 'site/app.js',
  legalComments: 'none',
  logLevel: 'info',
};

if (process.argv[1] && process.argv[1].endsWith('build.mjs')) {
  if (process.argv.includes('--watch')) {
    const ctx = await context(options);
    await ctx.watch();
  } else {
    await build(options);
  }
}
