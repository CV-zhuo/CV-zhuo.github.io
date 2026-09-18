# CV-zhuo.github.io — update notes

## How to apply

1. Copy everything in this folder into your repo, overwriting the existing files
   (keep the repo's `.git/` folder — it is not in here).
2. **Delete these from the repo**, they are gone from the site now:
   - `notes/` — the paper-notes pages
   - `img/` — the `Pasted image *.png` screenshots those notes used
   - every `.DS_Store` (a `.gitignore` is included so they stop coming back)
3. `git add -A && git commit && git push`. GitHub Pages redeploys in a minute or two.

## What changed

**Content — the CV on the site did not match the real one.** Rewritten from the
LaTeX CV, in English:

| On the old site | Actually |
| --- | --- |
| 宁波市泰惠医院信息咨询有限公司 | Ningbo Fanxing Consulting Co., Ltd. |
| 安莱科半导体（常州）有限公司 | Anlai Scientific Instruments (Ningbo) Co., Ltd. |
| 上海交通大学 2024.11 – 至今 | 2024.06 – 2024.12 |
| 二位一体 | 三位一体 ("Trinity" admission scheme) |
| 基于中心损失的 MRI 图像分类方法 | Multi-Center MRI Image Classification Based on Deep Learning |
| 基于中心 MRI 图像分类方法（专利） | Multi-Center MRI Image Classification Method, CN117173489B |
| 一种 sMRI 图像脑序多分类方法（专利） | A Sequential Multi-Classification Method for sMRI Images, CN116740463B |
| 基于中心损失与注意力机制的单分类器…（专利） | sMRI Classification with a High-Resolution Complementary-Attention UNet, CN114332535B |
| 一种基于扩散模型的 sMRI 图像分类方法（专利） | removed — no such patent |
| — | added: University of Birmingham MSc |
| — | added: HKUST (Guangzhou), Research Assistant |
| — | added: PLA Navy, 2019.09 – 2021.09 |
| — | added: **Publications** section with RMD², co-first author |

Patent entries now carry the granted publication number and inventor position,
so anyone can verify them.

**Structure**
- Removed the Notes section and its nav links; removed the dead `blog/` link.
- Added a Publications section (the first thing after About) and a CV PDF link
  in the nav, the link row and the footer.
- The GitHub corner pointed at `SimonAKing/HomePage` (the template author's repo).
  It now points at your GitHub profile; template credit moved to the footer.
- Page title, `description`, keywords, canonical URL and Open Graph tags filled in
  so the page is findable and previews properly when shared.

**Style** — the splash screen, fluid background and `enter` animation are untouched.
- The template's first font is **Comic Sans MS**. Overridden with a neutral system
  stack at the top of `css/site.css`. To go back, delete that one block.
- The About section was inline-styled `<ul>`s; it now uses proper entry/tag/stat
  components in `css/site.css`, and works down to 390px wide.
- Two icons (`icon-book`) had no glyph in the bundled icon font and rendered blank.
  Replaced with inline SVG.
- `js/site.js` now handles any `#anchor` link, not just `#about`.

## Things to check yourself

- **The intro animation could not be tested here** — `cdn.jsdelivr.net` is blocked
  in the build sandbox, so `anime.js` never loaded. Open the page locally
  (`python3 -m http.server` in the repo folder) and confirm the `enter` animation
  still plays before you push.
- `assets/Shihao_Zhuo_CV.pdf` is the English CV as of 2026-09-18. Re-export it
  whenever the LaTeX version changes.
- The About paragraph says you are looking for a PhD from 2027 — edit or delete
  that line as your plans firm up. It is the first `<p class="muted">` in
  `index.html`.
- The avatar is still `assets/CV.jpeg` (the cartoon). A photo would read better
  to a supervisor, but that is your call.
