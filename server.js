var express = require('express')
  , webpack = require('webpack')
  , webpackDevMiddleware = require('webpack-dev-middleware')
  , compile_config = require('./webpack.config')
  , compiler = webpack(compile_config)
  , app = express() // create our express web server app

  // a helper function to use
  , capitalize = require('./lib/string').capitalizeFirstLetter;

  app
  .set('views', __dirname + '/views') // specify where out html views are
  .set('view options', {layout: false}) // view options (see docs)
  .set('view engine', 'jade') // set the view render engine

  // use our webpack config to auto reload content
  .use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    lazy: false,
    watchDelay: 100,
    publicPath: "/js/",
    stats: { colors: true }
  }));

  // a basic wildcard route.
  app.get('/demo/:name', function(req, res){
    // see the jade files for more insight
    res.render(req.params.name, { // get the name from the url and retrieve that template (views/math.jade)
      name: req.params.name // the name we pass to the template
    , capitalize: capitalize // pass the capitalize fn to template
    });
  });

  // everything else will be served as static assets from our 'public' folder.
  // This includes all the js/
  // if your not comfortable with the jade. It serves static assets like html to (math.html)
  app.use('/', express.static(__dirname + '/public'));

  // mount the app to port 3000
  app.listen(3000);

  // the url to contect to
  console.log('Server started: http://localhost:3000/');
