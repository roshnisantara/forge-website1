import fs from 'fs';

const html = fs.readFileSync('ventures.html', 'utf8');
const regex = /class="([^"]*before:bg-\[#F5B301\][^"]*)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Match:\n', m[1], '\n');
}
