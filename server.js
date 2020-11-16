var express = require('express');
console.log('服务启动了')
const app = require('express')(),
      server = require('http').createServer(app);
    server.listen(9000);
    app.use(express.static('./dist'));
    app.get('/',function (req, res){
        res.sendFile(__dirname+'/index.html')
    })