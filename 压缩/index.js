var a = require('./unpack');
// 压缩
// var fs = require('fs');
// var zlib = require('zlib');

// var gzip = zlib.createGzip();

// var inFile = fs.createReadStream('./a.txt');
// var out = fs.createWriteStream('./yas.txt.zip');

// inFile.pipe(gzip).pipe(out);

// // 解压
// var fs = require('fs');
// var zlib = require('zlib');

// var gunzip = zlib.createGunzip();

// var inFile = fs.createReadStream('./yas.txt.zip');
// var outFile = fs.createWriteStream('./0.txt');

// inFile.pipe(gunzip).pipe(outFile);

a.unpack(1,"./5.txt","./hh/5.txt.rar");