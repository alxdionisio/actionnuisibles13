import fs from 'fs';
import path from 'path';

/**
 * Rend le chargement du CSS principal non bloquant pour améliorer le LCP/FCP.
 * Remplace <link rel="stylesheet" href="..."> par preload + onload.
 */
export default function cssAsyncPlugin() {
  return {
    name: 'vite-plugin-css-async',
    apply: 'build',
    closeBundle() {
      const config = this.config ?? {};
      const outDir = config.build?.outDir || 'dist';
      const root = config.root || process.cwd();
      const indexPath = path.resolve(root, outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      let html = fs.readFileSync(indexPath, 'utf-8');
      // Remplace <link rel="stylesheet" href="/assets/xxx.css"> par preload + onload
      const linkRegex = /<link\s[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*>/gi;
      const newHtml = html.replace(linkRegex, (match) => {
        const hrefMatch = match.match(/href=["']([^"']+\.css)["']/i);
        const href = hrefMatch ? hrefMatch[1] : '';
        if (!href) return match;
        return (
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" href="${href}"></noscript>`
        );
      });

      if (newHtml !== html) {
        fs.writeFileSync(indexPath, newHtml, 'utf-8');
      }
    },
  };
}
