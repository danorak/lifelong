// require azure?
var azure = require('azure')
	, uuid = require('node-uuid');

module.exports = TableStorageHelper;

function TableStorageHelper(tableName){
	// 
	this.partitionKey = '';
	this.tableName = tableName;

}

TableStorageHelper.prototype = {
	get: function(args){},
	put: function(args){},
	post: function(args){},
	delete: function(args){}
};
