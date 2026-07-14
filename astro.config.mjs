import { defineConfig } from 'astro/config';

// 正式網域：之後接上自訂網域就改這裡（例如 https://www.78ok.com）
export default defineConfig({
  site: 'https://78ok.com.tw',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
