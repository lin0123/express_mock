/*
* @Author: Administrator
* @Date:   2017-07-15 21:16:56
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-15 23:06:06
*/

const express = require('express');

// 事先准备的模拟后台的数据
const exempleGetData = require('../data/exempleGetData.json');
const exemplePostData = require('../data/exemplePostData.json');

var app = express();

// 使用允许跨域插件
var bodyParser = require('body-parser');
// 支持json编码
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

// 设置允许跨域请求
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-type, Accept");
	next();
});

app.get('/test/getData/data', (req, res) => {
	// 获取查询参数
	// console.log(req.query);
	// 返回json字段的数据
	res.json({
		returnCode: exempleGetData.returnCode,
		returnMessage: exempleGetData.returnMessage,
		packageList: exempleGetData.packageList,
		packageName: exempleGetData.packageName
	});
});

app.post('/test/postData/data', (req, res) => {
	// 获取查询参数
	// console.log(req.body);
	// 返回json字段的数据
	res.json({
		returnCode: exemplePostData.returnCode,
		returnMessage: exemplePostData.returnMessage,
		message: exemplePostData.message
	});
});

// 后续有新增的请求写上就可以

let port = 9000;
// "http://127.0.0.1"
app.listen(port);

console.log('listening:http://127.0.0.1' + port + '......');
