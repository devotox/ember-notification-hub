/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
    var app = new EmberAddon(defaults, {
        includePaths: [
          'app/styles'
        ]
    });

    /*
      This build file specifies the options for the dummy test app of this
      addon, located in `/tests/dummy`
      This build file does *not* influence how the addon or the app using it
      behave. You most likely want to be modifying `./index.js` or app's build file
    */
    app.import('vendor/icons/favicon.ico', {
        destDir: 'assets/icons'
    });

    app.import('node_modules/materialize-css/dist/css/materialize.css');

    return app.toTree();
};
