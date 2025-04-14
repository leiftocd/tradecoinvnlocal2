const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const publicPath = path.join(__dirname, '..', 'public');
const distPath = path.join(__dirname, '..', 'dist');

// Handle slug-based routes
app.get('/:slug', (req, res, next) => {
  const slug = req.params.slug;
  const publicHtml = path.join(publicPath, `${slug}.html`);
  const distHtml = path.join(distPath, `${slug}.html`);

  if (fs.existsSync(publicHtml)) {
    return res.sendFile(publicHtml);
  }
  if (fs.existsSync(distHtml)) {
    return res.sendFile(distHtml);
  }

  return next();
});

// Serve static files
app.use(express.static(publicPath));
app.use(express.static(distPath));

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;