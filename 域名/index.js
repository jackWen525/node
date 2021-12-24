var dns = require('dns');
var options = { all: true };

dns.lookup('www.qq.com', options, function (err, address, family) {
    if (err) throw err;
    console.log('lookup 例子B: ' + JSON.stringify(address));
});
dns.resolve4("www.qq.com", function (err, address) {
    if (err) throw err;
    console.log('resolve4 例子B: ' + JSON.stringify(address));
})