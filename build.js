const fs = require('fs');
const path = require('path');
require('dotenv').config();

const htmlFilePath = path.join(__dirname, 'index.html');
const trackingId = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

if (!trackingId) {
  console.error('GOOGLE_ANALYTICS_TRACKING_ID is not defined in the .env file');
  process.exit(1);
}

fs.readFile(htmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  const result = data.replace(/G-D8CYX2W7LK/g, trackingId);

  fs.writeFile(htmlFilePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing index.html:', err);
      return;
    }
    console.log('index.html has been updated with the new tracking ID');
  });
});