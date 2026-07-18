const https = require('https');
const fs = require('fs');
const path = require('path');

// The destination URL for the QR code
const targetUrl = 'https://hr-frames-sydb.vercel.app/';

// API to generate a high quality QR Code 
// color=f59e0b (Luxury Gold to match the site's theme), bgcolor=ffffff (white)
// Other nice colors you could use: 
// 0ea5e9 (Ocean Blue), a855f7 (Purple), ff6b6b (Sunset Red)
const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(targetUrl)}&color=f59e0b&bgcolor=ffffff&margin=20`;

// Target folder: e:\HR_FRAMES1\HR_FRAMES\qrcodes
const folderPath = path.join(__dirname, 'qrcodes');

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created directory: ${folderPath}`);
}

const filePath = path.join(folderPath, 'hr-frames-qrcode.png');

console.log('Downloading high-quality QR code...');

// Download and save the image
https.get(apiUrl, (res) => {
    if (res.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('\x1b[32m%s\x1b[0m', '✅ Success! QR Code generated successfully.');
            console.log(`Saved to: ${filePath}`);
        });
    } else {
        console.error(`Failed to download QR code. Status Code: ${res.statusCode}`);
    }
}).on('error', (err) => {
    console.error('Error generating QR code:', err.message);
});
