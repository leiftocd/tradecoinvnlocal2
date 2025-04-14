// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/:slug', (req, res, next) => {
  const slug = req.params.slug;
  const htmlFile = path.join(__dirname, 'public', `${slug}.html`);

  if (fs.existsSync(htmlFile)) {
    return res.sendFile(htmlFile);
  } else {
    return next();
  }
});

// Route fallback cho SPA (React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});