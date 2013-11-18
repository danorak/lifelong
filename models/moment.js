var tableStorageHelper = require('tableStorageHelper')
	, util = require('util')
	, _ = require('underscore');

function Moment(tableStorageHelper, options){
	var ext_arg = _.extend(options || {}, { tableStorageHelper: tableStorageHelper, tableName: 'moment'});
	// call the super class's constructor with our arguments
	this.super_.apply(this, ext_arg);
}

util.inherits(Moment, tableStorageHelper);
// refactor as mixins?


