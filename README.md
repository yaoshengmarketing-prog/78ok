# 78OK 娛樂城 — 官方站（Astro）

78OK 娛樂城的官方網站，含「新增一篇文章就自動生成列表／分類／sitemap」的部落格。技術用 Astro（靜態網站產生器），SEO 佳、速度快。

## 專案資訊
- 站名：78OK 娛樂城
- Repo：`yaoshengmarketing-prog/78ok`（分支 `main`）
- 正式網域：https://78ok.com.tw
- 部署：Cloudflare Pages（push 到 `main` 自動 build 上線）

## 網址結構（URL Standard v2.1）
- 首頁：`/`
- 文章：`/blog/{slug}/`（扁平，不帶分類層）
- 分類 Hub：`/{category}/`（根層，8 分類：`platform`／`account`／`app`／`promotions`／`deposit-withdraw`／`games`／`security`／`support`）
- 文章總覽：`/blog/`
- 獨立 Hub：`/deposit-guide/`、`/withdraw-guide/`
- 靜態信任頁：`/terms/`、`/privacy/`、`/security-license/`
- 自動產生：`/sitemap.xml`、`/rss.xml`、`/robots.txt`
- 技術基準：`trailingSlash:'always'` ＋ `build.format:'directory'`（一律帶尾斜線）
- 舊路徑 `/post/{slug}/`、`/blog/categories/{category}/` 僅保留於 `public/_redirects` 的 301 對照，不作為現行標準。

## 怎麼發一篇文章
在 `src/content/blog/` 新增一個 `.md`（檔名＝網址 slug），填上 frontmatter（title／description／category／pubDate／tags／faq…），下面用 Markdown 寫正文。push 到 `main` 後，文章頁、列表、分類頁、sitemap、RSS 全部自動更新。`draft: true` 的文章不會被發佈。

## 本機預覽 / 建置
- `npm install`
- `npm run dev`　# 本機預覽 http://localhost:4321
- `npm run build`　# 產生靜態網站到 dist/

## SEO 內建
- 每篇自動輸出 Meta Title/Description、canonical、Open Graph
- JSON-LD：BlogPosting ＋ 麵包屑 ＋ FAQPage
- 自動 sitemap.xml、RSS、robots.txt
