Product images naming and placement guide

Place optimized images under public/images/products/{slug}/

Naming convention:
- Use the product slug as folder name (e.g., soil-recharge)
- File basename should match the variant or use 'hero' for banners
- Provide responsive sizes with suffixes:
  - {basename}-400.jpg (400w)
  - {basename}-800.jpg (800w)
  - {basename}-1600.jpg (1600w)
- Provide WebP equivalents when possible:
  - {basename}-400.webp
  - {basename}-800.webp
  - {basename}-1600.webp

Examples:
- public/images/products/soil-recharge/soil-recharge-400.jpg
- public/images/products/soil-recharge/soil-recharge-800.jpg
- public/images/products/soil-recharge/soil-recharge-1600.jpg
- public/images/products/soil-recharge/hero-1600.jpg

Accessibility:
- Always set descriptive alt text in src/data/products.ts for each variant
- Ensure width and height attributes are provided or aspect-ratio is maintained to avoid CLS

Optimization:
- Compress JPEGs with quality ~70; generate WebP for smaller payloads
- Consider using a build step or external image CDN for production

Replace placeholder SVGs with final images and commit.