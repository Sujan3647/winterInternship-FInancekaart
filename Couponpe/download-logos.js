import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosDir = path.join(__dirname, 'public', 'logos');

// Create logos directory if it doesn't exist
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Logo URLs from multiple sources (favicons from company websites)
const logoUrls = {
  'amazon.png': 'https://www.amazon.in/favicon.ico',
  'flipkart.png': 'https://www.flipkart.com/favicon.ico',
  'myntra.png': 'https://www.myntra.com/favicon.ico',
  'ajio.png': 'https://www.ajio.com/favicon.ico',
  'meesho.png': 'https://www.meesho.com/favicon.ico',
  'tatacliq.png': 'https://www.tatacliq.com/favicon.ico',
  'snapdeal.png': 'https://www.snapdeal.com/favicon.ico',
  'nykaa.png': 'https://www.nykaa.com/favicon.ico',
  'lenskart.png': 'https://www.lenskart.com/favicon.ico',
  'decathlon.png': 'https://www.decathlon.in/favicon.ico',
  'reliance-digital.png': 'https://www.reliancedigital.in/favicon.ico',
  'croma.png': 'https://www.croma.com/favicon.ico',
  'firstcry.png': 'https://www.firstcry.com/favicon.ico',
  'bewakoof.png': 'https://www.bewakoof.com/favicon.ico',
  'pepperfry.png': 'https://www.pepperfry.com/favicon.ico',
  'zomato.png': 'https://www.zomato.com/favicon.ico',
  'swiggy.png': 'https://www.swiggy.com/favicon.ico',
  'blinkit.png': 'https://www.blinkit.com/favicon.ico',
  'zepto.png': 'https://www.zepto.com/favicon.ico',
  'bigbasket.png': 'https://www.bigbasket.com/favicon.ico',
  'dominos.png': 'https://www.dominos.co.in/favicon.ico',
  'kfc.png': 'https://www.kfc.co.in/favicon.ico',
  'mcdonalds.png': 'https://www.mcdonalds.com/favicon.ico',
  'pizzahut.png': 'https://www.pizzahut.co.in/favicon.ico',
  'burgerking.png': 'https://www.burgerking.in/favicon.ico',
  'subway.png': 'https://www.subway.com/favicon.ico',
  'starbucks.png': 'https://www.starbucks.com/favicon.ico',
  'faasos.png': 'https://www.faasos.com/favicon.ico',
  'behrouz.png': 'https://www.behrouz.com/favicon.ico',
  'ccd.png': 'https://www.cafecoffeeday.com/favicon.ico',
  'uber.png': 'https://www.uber.com/favicon.ico',
  'ola.png': 'https://www.olacabs.com/favicon.ico',
  'makemytrip.png': 'https://www.makemytrip.com/favicon.ico',
  'goibibo.png': 'https://www.goibibo.com/favicon.ico',
  'redbus.png': 'https://www.redbus.in/favicon.ico',
  'oyo.png': 'https://www.oyorooms.com/favicon.ico',
  'paytm.png': 'https://paytm.com/favicon.ico',
  'phonepe.png': 'https://www.phonepe.com/favicon.ico',
  'googlepay.png': 'https://pay.google.com/favicon.ico',
  'amazonpay.png': 'https://www.amazon.in/favicon.ico',
  'cred.png': 'https://cred.club/favicon.ico',
  'bookmyshow.png': 'https://in.bookmyshow.com/favicon.ico',
  'netflix.png': 'https://www.netflix.com/favicon.ico',
  'primevideo.png': 'https://www.primevideo.com/favicon.ico',
  'hotstar.png': 'https://www.hotstar.com/favicon.ico',
  'spotify.png': 'https://www.spotify.com/favicon.ico',
  'udemy.png': 'https://www.udemy.com/favicon.ico',
  'coursera.png': 'https://www.coursera.org/favicon.ico',
  'urbancompany.png': 'https://www.urbancompany.com/favicon.ico',
  'canva.png': 'https://www.canva.com/favicon.ico'
};

function downloadLogo(filename, url) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(logosDir, filename);
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        console.log(`✗ Failed to download ${filename} (${response.statusCode})`);
        resolve();
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.log(`✗ Error downloading ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function downloadAllLogos() {
  console.log('Starting logo downloads...\n');
  const downloads = Object.entries(logoUrls).map(([filename, url]) => 
    downloadLogo(filename, url)
  );
  
  await Promise.all(downloads);
  console.log('\nLogo download complete!');
}

downloadAllLogos();
