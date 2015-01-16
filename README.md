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

### Project Layout

`package.json` defines 3rd-party code that is needed. The `npm install` command above installs these into the project folder at `node_modules`.

If you want to explore adding additional code use [npmsearch](https://www.npmjs.com). You can directly edit the JSON file or use `npm install <package> --save` to have it installed and saved automatically.


### Client

This folder contains all the client side code. This is where all of the javascript for the client resides.

Looking at the source code you will notice that it uses 3rd party code like `jquery`, webpack will resolve this pathing for us. As an exercise I also look into the ../lib/ directory for additional js resources. Again, this is for demonstration purposes, how you choose to organize code is your choice not a constraint.


In this case I created three separate mini web pages with different behavior.
