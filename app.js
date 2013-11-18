
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , moments = require('./routes/moments')
  , path = require('path')
  , expressValidator = require('express-validator')
  , lessMiddleware = require('less-middleware')
  , azure = require('azure')
  , uuid = require('node-uuid');

var app = express();

// Hack connect.js to allow relative @import statements in less.js
// express.compiler.compilers.less.compile = function(str, fn) {
//     try {
//         less.render(str, {paths: [__dirname + '/public/css']}, fn);
//     } catch (err) {
//         fn(err);
//     }
// };

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.set('port', process.env.PORT || 1337);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(lessMiddleware({
    src: path.join(__dirname, 'public'),
    compress: true,
    force: true,
    debug: true
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// db connection
mongoose.connect('mongodb://localhost/test');

// Routes

// app.get('/', routes.index);
app.get('/', moments.all);
app.get('/moments', moments.all);
app.get('/moments/:id', moments.select);
app.get('/create', moments.create);
app.post('/create', function(req, res) {
  console.log("Got here");
  console.log(req.body);
  res.send('200');

  //res.send(req);
})
// app.put('/moments/:id',routes.put);

app.listen(app.get('port'));
console.log('dir name ' + __dirname);
console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
