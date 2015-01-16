# jsmod

### Overview

This project is designed to provide an introduction into using a module system for client side javascript. It uses the CommonJS syntax for writing modules. You can read more about this [module system here](http://nodejs.org/api/modules.html).

### Setup

Make sure [node](http://nodejs.org/) is installed.

Open up a terminal / command line.

```bash
npm install webpack -g
git clone https://github.com/nw/jsmod.git
cd jsmod
npm install
webpack
```

### Project Description Overview

There are currently a couple different ways to interact with this repo.

* type `webpack` this will compile the code based on the definitions inside of `webpack.config.js`
* run `webpack --watch` this will recompile files automatically as changes are detected to the client side code.
* Run the express app. `node server` This will fire up a web server with webpack middleware. It will automatically recompile the client code on changes. The url is http://localhost:3000. The views (html) are in jade.

`package.json` defines 3rd-party code that is needed. The `npm install` command above installs these into the project folder at `node_modules`.

If you want to explore adding additional code use [npmsearch](https://www.npmjs.com). You can directly edit the JSON file or use `npm install <package> --save` to have it installed and saved automatically.


#### client/

This folder contains all the client side code. This is where all of the javascript for the client resides.

Looking at the source code you will notice that it uses 3rd party code like `jquery`, webpack will resolve this pathing for us. As an exercise I also look into the ../lib/ directory for additional js resources. Again, this is for demonstration purposes, how you choose to organize code is your choice not a constraint.


In this case I created three separate mini web pages with different behavior.

#### lib/

General js libraries. They are used for demonstration purposes.

* To show how easy it is to test.
* sharing code with client and server

#### public/

Where all the client side code lives. When webpack compiles the code based on the output specification inside of `webpack.config.js` it puts all code in `public/js`.

This directory is also used by the optional express server to serve the resources. If you don't want to use the node webserver to test simply open

* math.html
* markdown.html
* duration.html

inside of a web browser.

#### test/

Demonstrates how you might go about testing modular code.

This is setup to use mocha. I would recommend installing mocha globally with:

```bash
npm install -g mocha
```

[Docs for Mocha](http://mochajs.org/) For clarity on the options within the `mocha.opts` file.

##### Running tests

```bash
npm test
```
or

```bash
mocha
```

Note: I am using [should](https://www.npmjs.com/package/should) to ease the burden of testing.


#### views/

This is used only for the express web server. The html is automatically generated from jade templates.

To reduce complexity I also included static html files in the public/ directory to make understanding easier.

This is was provided to show routing in node and a simple example of utilizing html template languages.


#### server.js

The web server. View source for more details.
