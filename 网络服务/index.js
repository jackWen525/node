let net = require('net');
let http = require('http');

function netServe(PORT, HOST) {
    net.createServer((socket) => {
        socket.on('data', function (data) {
            console.log('DATA ' + socket.remoteAddress + ': ' + data);
            console.log('Data is: ' + data);

            socket.write('Data from you is  "' + data + '"');
        });
        socket.on("close", () => {
            console.log("关闭");
        })
    }).listen(PORT, HOST)
}

function createHttp(PORT) {
    http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        var body = "";
        req.on("data", (chen) => {
            body = chen;
            console.log(JSON.parse(chen));
        })
        req.on("end", () => {
            res.writeHead(200, {'content-type': "application/json"});
            console.log("55555"+body);
            let data = JSON.stringify({name:"小米",age:20,sex:"男"});
           
            res.end(data)
           
        })

    }).listen(PORT, () => {
        console.log("127.0.0.1:" + PORT);
    })
}
createHttp(3000)