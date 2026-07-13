# 78OK 首頁（靜態站）

78OK 遊戲平台首頁，純靜態網站，資料放 GitHub、部署於 Netlify。

## 結構

```
78ok-site/
├─ index.html          # 首頁（主視覺輪播 18 張 78OK banner）
├─ images/             # banner-01 ~ banner-18.webp（1920×700，webp 壓縮）
├─ netlify.toml        # Netlify 部署設定（發佈根目錄）
├─ .gitignore
└─ README.md
```

## 部署（GitHub → Netlify）

1. 把本資料夾所有檔案（含 `images/`）上傳到 GitHub repo。
2. Netlify → Add new site → Import from GitHub → 選這個 repo。
3. Build command 留空、Publish directory 設 `.`（或直接讀 `netlify.toml`）。
4. Deploy 完成即上線。

## 備註

- 主視覺 18 張圖為 78OK 官方 banner，已去重並轉為 webp。
- 首頁其餘連結（選單、CTA）目前為 `#` 佔位，待實際頁面 URL 確認後再補上內部連結。
