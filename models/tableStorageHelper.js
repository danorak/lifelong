// require azure?
var azure = require('azure')
	, uuid = require('node-uuid');

module.exports = TableStorageHelper;

function TableStorageHelper(tableName){
	// 
	this.partitionKey = '';
	this.tableName = tableName;
}

TableStorageHelper.prototype.get = function(args){}

TableStorageHelper.prototype.put = function(args){}

TableStorageHelper.prototype.post = function(args){}

TableStorageHelper.prototype.delete = function(args){}

