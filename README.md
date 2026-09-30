# NanfangaoLookout.com

南方澳觀景台單頁景點網站，使用 Astro、Tailwind CSS、TypeScript、pnpm 與 Cloudflare Workers Static Assets。網站為台灣繁體中文，無資料庫、無登入、無 CMS。

## 已完成內容

- 南方澳海港風格單頁設計
- 真實照片本地化與 WebP / AVIF 響應式圖片
- 景觀照片互動標記
- 依固定景點座標在瀏覽器端計算今日民用曙光、日出與建議抵達時間
- 台9丁線交通、停車與安全迴轉說明
- 1 小時、半日、攝影、親子長輩四種互動行程
- 實景圖庫與原生 Dialog 燈箱
- FAQ、TouristAttraction、WebSite 結構化資料
- OG 圖、favicon、robots.txt、sitemap.xml、404 頁面
- 圖片授權頁與隱私說明
- GA4：`G-HXM22WWPKP`
- Cloudflare Workers 自訂網域設定

## 本機開發

需要 Node.js 22 或以上版本，以及 pnpm。

```bash
corepack enable
pnpm install
pnpm dev
```

本機預設網址：`http://localhost:4321`

## 檢查與建置

```bash
pnpm build
pnpm preview
```

建置輸出位於 `dist/`。

## 部署到 Cloudflare Workers

先登入 Cloudflare：

```bash
pnpm exec wrangler login
```

再執行：

```bash
pnpm deploy
```

`wrangler.jsonc` 已設定：

- Worker 名稱：`nanfangao-lookout`
- 靜態資產目錄：`./dist`

首次部署會使用 Cloudflare 提供的 `workers.dev` 網址。若要使用 `nanfangaolookout.com`，請先將網域加入同一個 Cloudflare 帳號並啟用代理，再於 Worker 控制台的 Custom Domains 綁定主網域與 `www` 網域。

## 頁面架構

| 路徑 | 主題 | 主要對應搜尋意圖 |
| --- | --- | --- |
| `/` | 觀景台總覽（亮點、時間、交通、行程、照片、FAQ） | 南方澳觀景台、南方澳、蘇澳景點 |
| `/status/` | 開放狀態、免門票、開放時間、現場設施 | 南方澳觀景台暫停營業、門票、開放時間 |
| `/parking/` | 台9丁線自駕路線、免費停車、安全迴轉、大眾運輸 | 南方澳觀景台停車場、南方澳交通 |
| `/night-view/` | 夜景、藍調時刻、日出時間、夜拍建議 | 宜蘭夜景、南方澳夜景、蘇澳夜景 |
| `/nearby/` | 內埤海灣、豆腐岬、南天宮、漁港美食與一日遊 | 蘇澳景點美食、南方澳附近景點 |
| `/credits/` | 圖片授權與攝影者 | — |
| `/privacy/` | 隱私說明（noindex） | — |

## SEO 維護重點

- 景點事實（名稱、地址、電話、座標、Plus Code、Google 評價、地圖連結）集中在 `src/data/site.ts`，不要在元件裡硬編碼。
- 結構化資料集中在 `src/lib/schema.ts`：`TouristAttraction`（含 `aggregateRating`、`isAccessibleForFree`、`telephone`、`hasMap`）、`FAQPage`、`BreadcrumbList`、`WebSite`。
- 站名格式為「景點名稱 + 城市 + 旅遊指南」（`SITE_NAME`），子頁標題統一用 `withSiteName()` 附加後綴。
- 各主題頁之間以 `src/components/Explore.astro` 互鏈，首頁與頁尾都有入口。

## 專案結構

```text
src/
  components/       首頁區塊與互動元件
  data/             FAQ 等靜態資料
  layouts/          SEO、GA4、共用頁面結構
  pages/            首頁、圖片授權、隱私、404
  styles/           Tailwind 與全域樣式
public/
  images/           本地化真實照片與 OG 圖
  robots.txt
  sitemap.xml
  _headers
```

## 網址與重新導向

- `http://` → `https://`、`www` → 主網域的 301：Workers Static Assets 不支援網域層級 `_redirects`，請在 Cloudflare 控制台用 Always Use HTTPS 與 Redirect Rules 設定。
- HSTS 與安全標頭由 `public/_headers` 下發。

## 內容維護

景點資訊最後查核日期為 2026-09-30（評價 4.5／9,019 則，Google 地圖）。設施、道路、施工與開放狀況可能改變，建議定期檢查：

- 首頁與頁尾的查核日期
- 停車與道路安全資訊
- FAQ 內容
- JSON-LD 的開放時間與地址
- `public/sitemap.xml` 的 `lastmod`

## 圖片授權

請保留 `/credits/`、`PHOTO-CREDITS.md` 與攝影者署名。完整來源見 [PHOTO-CREDITS.md](./PHOTO-CREDITS.md)。
