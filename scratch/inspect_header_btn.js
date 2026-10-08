const fs = require('fs');

const vHtml = fs.readFileSync('ventures.html', 'utf8');
const idx = vHtml.indexOf('Portfolio');
if (idx !== -1) {
  console.log(vHtml.substring(idx - 400, idx + 800));
}
