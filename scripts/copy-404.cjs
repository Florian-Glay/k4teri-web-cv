const fs = require('fs');
fs.copyFileSync('dist/index.html', 'dist/404.html');
console.log('404.html créé à partir de dist/index.html');