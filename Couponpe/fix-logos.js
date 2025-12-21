import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.join(__dirname, 'public', 'logos');

// Missing logos with alternative URLs
const missingLogos = {
  'flipkart.png': 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png',
  'myntra.png': 'https://constant.myntassets.com/web/assets/img/icon.png',
  'ajio.png': 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30102023-MainBannerDailystrip-Z2-P1-ajiologo.jpg',
  'meesho.png': 'https://www.meesho.io/assets/svgIcons/meeshoLogo.svg',
  'snapdeal.png': 'https://i3.sdlcdn.com/img/logo.png',
  'nykaa.png': 'https://images-static.nykaa.com/nykdesignstudio-images/pub/media/logo/stores/1/nykaa_logo_1.svg',
  'reliance-digital.png': 'https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg',
  'croma.png': 'https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/Category%20icon/Updated%20Icons/Croma_Logo_zytow6.png',
  'pepperfry.png': 'https://ii1.pepperfry.com/media/pf_m/header/logo.svg',
  'swiggy.png': 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/logo_f605abcb.png',
  'blinkit.png': 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/assets/eta-icons/15-mins-filled.png',
  'zepto.png': 'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/web/4d2d000ef073fef07c2a0e8e8c26f721.png',
  'kfc.png': 'https://online.kfc.co.in/static/media/kfcLogo.a0b4b525.png',
  'mcdonalds.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png',
  'pizzahut.png': 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/200px-Pizza_Hut_logo.svg.png',
  'faasos.png': 'https://www.faasos.com/assets/logo.png',
  'behrouz.png': 'https://www.behrouz.com/assets/logo.png',
  'ccd.png': 'https://www.cafecoffeeday.com/sites/all/themes/ccd/assets/logo.png',
  'ola.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ola_Cabs_logo.svg/200px-Ola_Cabs_logo.svg.png',
  'makemytrip.png': 'https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/logo.png',
  'googlepay.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/200px-Google_Pay_Logo.svg.png',
  'udemy.png': 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
  'subway.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/200px-Subway_2016_logo.svg.png'
};

function downloadLogo(filename, url) {
  return new Promise((resolve) => {
    const filepath = path.join(logosDir, filename);
    
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      if (stats.size > 1000) {
        console.log(`⏭  Skipped ${filename} (already exists)`);
        resolve();
        return;
      }
    }

    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 15000
    };

    const request = protocol.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(filepath, () => {});
        const redirectUrl = response.headers.location;
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

async function main() {
  console.log(`🔧 Fixing ${Object.keys(missingLogos).length} missing logos...\n`);
  
  for (const [filename, url] of Object.entries(missingLogos)) {
    await downloadLogo(filename, url);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n✅ Done! Check /public/logos/ folder');
}

main();
