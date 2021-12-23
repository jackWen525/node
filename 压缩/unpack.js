var fs = require('fs');
var zlib = require('zlib');
/**
 * 
 * @param {*} type 0 解压 1 压缩
 * @param {*} target 目标文件
 * @param {*} out 出口
 */
function unpack(type, target, out) {
    try {
        var gunzip = type === 0 ? zlib.createGunzip() : zlib.createGzip();
        var inFile = fs.createReadStream(target);
        var outFile = fs.createWriteStream(out);

        inFile.pipe(gunzip).pipe(outFile);
    } catch (error) {
        new Error(error)
        // console.log(error);
    }

}
exports.unpack = unpack;