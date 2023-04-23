// // Required modules
// // const https = require('https');
// // const { createCanvas, loadImage } = require('canvas');

// // Naver Maps API credentials
// const client_id = 'nla6b8uhez';
// const client_secret = 'gvGlrDRkKMViMJz9WhKXKvHVysNohVeVQMl2QJMg';

// // Map options
// const lon = '127.35606790993106';
// const lat = '36.362226199413065';
// const _center = `${lon},${lat}`;
// const _level = 17;
// const _w = 400;
// const _h = 400;
// const _maptype = 'satellite';
// const _format = 'png';
// const _scale = 1;
// const _markers = `type:d|size:mid|pos:${lon} ${lat}|color:red`;
// const _lang = 'ko';
// const _public_transit = true;
// const _dataversion = '';

// // API endpoint and headers
// const endpoint = 'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster';
// const headers = {
//   'X-NCP-APIGW-API-KEY-ID': client_id,
//   'X-NCP-APIGW-API-KEY': client_secret,
// };

// // Construct URL
// const url = `${endpoint}?center=${_center}&level=${_level}&w=${_w}&h=${_h}&maptype=${_maptype}&format=${_format}&scale=${_scale}&markers=${_markers}&lang=${_lang}&public_transit=${_public_transit}&dataversion=${_dataversion}`;

// const img = document.createElement('img');
// innerHeight.src = url;

// document.getElementById('map-container').appendChild(img);

// // Send API request
// https.get(url, { headers }, res => {
//   // Create a buffer to hold the response data
//   const chunks = [];
//   res.on('data', chunk => {
//     chunks.push(chunk);
//   });
//   res.on('end', () => {
//     // Combine all the chunks into a single buffer
//     const buffer = Buffer.concat(chunks);

//     // Create a canvas and load the image data
//     const canvas = createCanvas(_w, _h);
//     const ctx = canvas.getContext('2d');
//     const img = new loadImage(buffer);

//     // Draw the image on the canvas
//     img.then(image => {
//       ctx.drawImage(image, 0, 0);
//       // Do something with the canvas, e.g. save the image to a file or send it as a response
//     });
//   });
// }).on('error', error => {
//   console.error(error);
// });