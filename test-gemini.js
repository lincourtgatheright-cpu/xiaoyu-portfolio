const https = require('https');

const data = JSON.stringify({
  contents: [{ parts: [{ text: 'hi' }] }]
});

const options = {
  hostname: 'generativelanguage.googleapis.com',
  path: '/v1beta/models/gemini-2.0-flash:generateContent?key=AlzaSyALrDTpZAJ0poNM2JJmq7OHFn8o3f_W9Gg',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log('Status:', res.statusCode);
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => console.log('Body:', body.substring(0, 500)));
});

req.on('error', (e) => console.log('Error:', e.message));
req.write(data);
req.end();
