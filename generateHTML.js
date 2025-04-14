const fs = require('fs');
const path = require('path');
const seoData = require('./src/seoData');

const outputDir = path.join(__dirname, 'public');
// Cập nhật đường dẫn đúng tới template.html
const templatePath = path.join(__dirname, 'templates', 'template.html');

// Domain gốc
const baseDomain = 'https://go2.tradecoinvn.net';
const imageUrl = `${baseDomain}/bannerLeft.png`;

// Đọc template gốc
const rawTemplate = fs.readFileSync(templatePath, 'utf8');

// Đảm bảo thư mục public tồn tại
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate từng trang từ seoData
Object.entries(seoData).forEach(([slug, data]) => {
  const htmlContent = rawTemplate
    .replace(/{{TITLE}}/g, data.title)
    .replace(/{{DESCRIPTION}}/g, data.description)
    .replace(/{{IMAGE}}/g, imageUrl)
    .replace(/{{URL}}/g, `${baseDomain}/${slug}`)
    .replace(/{{REDIRECT_URL}}/g, data.url)
    .replace(/{{SLUG}}/g, slug);

  fs.writeFileSync(path.join(outputDir, `${slug}.html`), htmlContent, 'utf8');
  console.log(`✅ Created: ${slug}.html`);
});
