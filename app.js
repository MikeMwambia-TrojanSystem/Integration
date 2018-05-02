//Optimized Server
var express = require('express');
var fs = require('fs'); 
var path = require('path');
var https = require('https');
var connect = require('connect');
var serveStatic = require('serve-static')
var compression = require('compression')
var bodyParser = require('body-parser');
var express = require('express');
var oneDay = 86400000;
var helmet = require('helmet');//Customize this for maximum security.
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
var compression = require('compression');
app.use(compression());
//Customize this for production purposes.
app.use(helmet());
app.use(helmet.hidePoweredBy({setTo:'PHP/5.4.0'}));
app.use(express.static(__dirname+'/public',{maxAge:oneDay}));
app.get('/',function(req,res,next){
	//Call the git API and get issues.
	//Here send the excel file generated that has issues.
    res.sendFile(path.join(__dirname+'/index.html'));
    var str = req.originalUrl;
    console.log(str);
});
https.createServer(options,app).listen(4434);
