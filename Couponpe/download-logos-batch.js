import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosDir = path.join(__dirname, 'public', 'logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// All logo URLs divided into batches of 10
const allLogos = {
  'amazon.png': 'https://www.amazon.in/favicon.ico',
  'flipkart.png': 'https://img.icons8.com/color/96/flipkart.png',
  'myntra.png': 'https://constant.myntassets.com/pwa/assets/img/icon-512x512.png',
  'ajio.png': 'https://www.ajio.com/favicon.ico',
  'meesho.png': 'https://www.meesho.com/favicon.ico',
  'tatacliq.png': 'https://www.tatacliq.com/favicon.ico',
  'snapdeal.png': 'https://i2.sdlcdn.com/img/snapdeal/favicon.ico',
  'nykaa.png': 'https://www.nykaa.com/favicon.ico',
  'lenskart.png': 'https://www.lenskart.com/favicon.ico',
  'decathlon.png': 'https://www.decathlon.in/favicon.ico',
  
  'reliance-digital.png': 'https://www.reliancedigital.in/favicon.ico',
  'croma.png': 'https://www.croma.com/favicon.ico',
  'firstcry.png': 'https://www.firstcry.com/favicon.ico',
  'bewakoof.png': 'https://images.bewakoof.com/web/ic-web-head-bwkf-logo.svg',
  'pepperfry.png': 'https://www.pepperfry.com/favicon.ico',
  'zomato.png': 'https://b.zmtcdn.com/images/logo/zomato_logo_2017.png',
  'swiggy.png': 'https://www.swiggy.com/favicon.ico',
  'blinkit.png': 'https://cdn.grofers.com/assets/logo-blinkit.png',
  'zepto.png': 'https://cdn.zeptonow.com/app/dist/icons/favicon.ico',
  'bigbasket.png': 'https://www.bigbasket.com/favicon.ico',
  
  'dominos.png': 'https://www.dominos.co.in/favicon.ico',
  'kfc.png': 'https://online.kfc.co.in/static/media/kfcLogo.4a0de4e4.svg',
  'mcdonalds.png': 'https://www.mcdonalds.com/favicon.ico',
  'pizzahut.png': 'https://www.pizzahut.co.in/favicon.ico',
  'burgerking.png': 'https://www.burgerking.in/static/media/logo.png',
  'subway.png': 'https://www.subway.com/favicon.ico',
  'starbucks.png': 'https://www.starbucks.com/favicon.ico',
  'faasos.png': 'https://www.faasos.com/favicon.ico',
  'behrouz.png': 'https://www.behrouz.com/favicon.ico',
  'ccd.png': 'https://www.cafecoffeeday.com/favicon.ico',
  
  'uber.png': 'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/favicon.ico',
  'ola.png': 'https://www.olacabs.com/favicon.ico',
  'makemytrip.png': 'https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png',
  'goibibo.png': 'https://www.goibibo.com/favicon.ico',
  'redbus.png': 'https://www.redbus.in/favicon.ico',
  'oyo.png': 'https://www.oyorooms.com/favicon.ico',
  'paytm.png': 'https://paytm.com/favicon.ico',
  'phonepe.png': 'https://www.phonepe.com/webstatic/8037/static/f5a886bd2e14e279f9fe16b7784bb743/d97d3/PhonePe.webp',
  'googlepay.png': 'https://www.gstatic.com/images/branding/product/1x/pay_96dp.png',
  'amazonpay.png': 'https://m.media-amazon.com/images/G/31/AmazonPay/APay_Logo._CB485926472_.png',
  
  'cred.png': 'https://web-assets.cred.club/_next/assets/images/home-page/cred-logo.png',
  'bookmyshow.png': 'https://in.bmscdn.com/webin/common/icons/logo.svg',
  'netflix.png': 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
  'primevideo.png': 'https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png',
  'hotstar.png': 'https://www.hotstar.com/favicon.ico',
  'spotify.png': 'https://www.scdn.co/i/_global/favicon.png',
  'udemy.png': 'https://www.udemy.com/staticx/udemy/images/v7/favicon-96x96.png',
  'coursera.png': 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-96x96.png',
  'urbancompany.png': 'https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/logo.png',
  'canva.png': 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg'
};

function downloadLogo(filename, url) {
  return new Promise((resolve) => {
    const filepath = path.join(logosDir, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭  Skipped ${filename} (already exists)`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, { timeout: 10000 }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        file.close();
        fs.unlink(filepath, () => {});
        downloadLogo(filename, redirectUrl).then(resolve);
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        console.log(`✗ Failed ${filename} (${response.statusCode})`);
        resolve();
      }
    });

    request.on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      console.log(`✗ Error ${filename}: ${err.message}`);
      resolve();
    });

    request.on('timeout', () => {
      request.destroy();
      file.close();
      fs.unlink(filepath, () => {});
      console.log(`✗ Timeout ${filename}`);
      resolve();
    });
  });
}

async function downloadBatch(logos, batchNum) {
  console.log(`\n📦 Batch ${batchNum} - Starting download of ${Object.keys(logos).length} logos...\n`);
  const downloads = Object.entries(logos).map(([filename, url]) => 
    downloadLogo(filename, url)
  );
  await Promise.all(downloads);
  console.log(`\n✅ Batch ${batchNum} complete!\n`);
}

async function main() {
  const entries = Object.entries(allLogos);
  const batches = [];
  
  // Split into batches of 10
  for (let i = 0; i < entries.length; i += 10) {
    batches.push(Object.fromEntries(entries.slice(i, i + 10)));
  }

  console.log(`🚀 Starting download of ${entries.length} logos in ${batches.length} batches...`);
  
  for (let i = 0; i < batches.length; i++) {
    await downloadBatch(batches[i], i + 1);
    // Wait 2 seconds between batches
    if (i < batches.length - 1) {
      console.log('⏳ Waiting 2 seconds before next batch...\n');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('\n🎉 All batches complete!');
  console.log(`📁 Logos saved to: ${logosDir}`);
}

main();
