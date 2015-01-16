var express = require('express')
  , webpack = require('webpack')
  , webpackDevMiddleware = require('webpack-dev-middleware')
  , bodyParser = require('body-parser')
  , app = express()
  , compile_config = require('./webpack.config')
  , compiler = webpack(compile_config)

  , capitalize = require('./lib/string').capitalizeFirstLetter;

  app
  .set('views', __dirname + '/views')
  .set('view options', {layout: false})
  .set('view engine', 'jade')

  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    lazy: false,
    watchDelay: 100,
    publicPath: "/js/",
    stats: { colors: true }
  }));

  app.get('/demo/:name', function(req, res){
    res.render(req.params.name, {
      name: req.params.name
    , capitalize: capitalize
    });
  });

  app.use('/', express.static(__dirname + '/public'));

  app.listen(3000);

  console.log('Server started: http://localhost:3000/');
