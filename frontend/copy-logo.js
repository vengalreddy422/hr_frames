const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\MSI\\.gemini\\antigravity-ide\\brain\\09a661eb-5bc2-41d0-a9c6-585f170739f1\\media__1784320953189.jpg';
const dest = path.join(__dirname, 'public', 'logo.jpg');

fs.copyFileSync(src, dest);
console.log('Logo copied successfully to public/logo.jpg');
