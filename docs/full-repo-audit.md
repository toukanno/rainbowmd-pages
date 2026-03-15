# Full Repository Audit (Bug / Security / Dead Code / Refactor / Performance)
## Scope
- Total files reviewed: **67** (from `rg --files`).
- This audit covers source, config, docs, HTML, and release binaries present in the repository.

## High-priority findings
1. **Wrong product detail URL in Download section (bug/security trust issue)**  
   `landing/src/components/Download.jsx` links product details to `https://react-modern-site-eight.vercel.app/`, which appears unrelated to this project and can reduce trust / cause user confusion.
2. **Privacy policy inconsistency (compliance risk)**  
   SPA privacy text says ads/affiliate and analytics may be used, while root `privacy-policy.html` states no tracking/collection. Inconsistent legal statements can be problematic.
3. **Unlocalized UI string (i18n bug)**  
   `Platforms` component renders `Available` badge as a hard-coded English string instead of `t(...)`.

## Medium findings
- **Dead/cleanup candidate:** `Features.jsx` disables `no-unused-vars` and imports `AnimatePresence` without usage.
- **Dead assets:** multiple images under `landing/public/img` are not referenced from source/docs (likely leftovers).
- **Release artifact duplication:** same Windows installers are stored in both `windows/dist` and `releases/windows/download/...`, increasing repository size.
- **Duplicate file names for same version:** `RainbowMD Setup 2.0.1.exe` and `RainbowMD.Setup.2.0.1.exe` both exist in release directory (possible accidental duplication).

## Performance observations
- Build bundle JS is ~373.51kB (118.94kB gzip). Acceptable, but image-heavy public assets dominate payload potential if referenced.
- Theme/color definitions are extensive and repeated class maps in `AppContext.jsx`; can be moved to typed config module and memoized selectors for maintainability.

## Checks executed
- `cd landing && npm ci`
- `cd landing && npm run lint`
- `cd landing && npm run build`
- `cd landing && npm audit --omit=dev` (registry returned 403, could not complete)
- custom Python script to detect unreferenced assets in `landing/public`

## Complete file inventory reviewed
- `README.md`
- `docs/release-guide.md`
- `releases/windows/download/v1.0.0/RainbowMD.Setup.1.0.0.exe`
- `releases/windows/download/v2.0.1/RainbowMD.Setup.2.0.1.exe`
- `releases/windows/download/v2.0.1/RainbowMD Setup 2.0.1.exe`
- `privacy-policy.html`
- `windows/dist/RainbowMD.Setup.1.0.0.exe`
- `windows/dist/RainbowMD Setup 2.0.1.exe`
- `landing/vite.config.js`
- `landing/README.md`
- `landing/public/og-image.png`
- `landing/public/img/theme-sunset.png`
- `landing/public/img/ss-toolbar.png`
- `landing/public/img/スクリーンショット 2026-03-14 102013.png`
- `landing/public/img/store/ss-toolbar.png`
- `landing/public/img/store/スクリーンショット 2026-03-14 102013.png`
- `landing/public/img/store/theme-forest.png`
- `landing/public/img/store/theme-dark.png`
- `landing/public/img/store/theme-light.png`
- `landing/public/img/store/ss-export.png`
- `landing/public/img/store/ss-main.png`
- `landing/public/img/store/AI.png`
- `landing/public/img/store/RainbowMD_1440x2160.png`
- `landing/public/img/store/AI_2140.png`
- `landing/public/img/ss-lang - コピー.png`
- `landing/public/img/theme-forest.png`
- `landing/public/img/feature-lang.png`
- `landing/public/img/theme-dark.png`
- `landing/public/img/ss-search1.png`
- `landing/public/img/ss-preview.png`
- `landing/public/img/theme-light.png`
- `landing/public/img/ss-export.png`
- `landing/public/img/ss-search2.png`
- `landing/public/img/theme-forest_jp.png`
- `landing/public/img/スクリーンショット 2026-03-14 104610.png`
- `landing/public/img/save.png`
- `landing/public/img/theme-ocean.png`
- `landing/public/img/transparency.png`
- `landing/public/img/theme-midnight.png`
- `landing/public/img/ss-lang.png`
- `landing/public/img/ss-main.png`
- `landing/public/img/スクリーンショット 2026-03-14 104629.png`
- `landing/public/img/AI.png`
- `landing/public/img/AI_1.png`
- `landing/public/img/theme-paper.png`
- `landing/public/img/RainbowMD_1440x2160.png`
- `landing/public/img/ss-search3.png`
- `landing/public/favicon.svg`
- `landing/src/main.jsx`
- `landing/src/App.css`
- `landing/src/components/Gallery.jsx`
- `landing/src/components/Features.jsx`
- `landing/src/components/Footer.jsx`
- `landing/src/components/Hero.jsx`
- `landing/src/components/Header.jsx`
- `landing/src/components/Screenshot.jsx`
- `landing/src/components/PrivacyPolicy.jsx`
- `landing/src/components/Download.jsx`
- `landing/src/components/Platforms.jsx`
- `landing/src/context/AppContext.jsx`
- `landing/src/i18n.js`
- `landing/src/index.css`
- `landing/src/App.jsx`
- `landing/eslint.config.js`
- `landing/package.json`
- `landing/index.html`
- `landing/package-lock.json`
