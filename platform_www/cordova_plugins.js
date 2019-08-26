cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-call.CordovaCall",
      "file": "plugins/cordova-call/www/CordovaCall.js",
      "pluginId": "cordova-call",
      "clobbers": [
        "cordova.plugins.CordovaCall"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-call": "1.1.6",
    "cordova-plugin-whitelist": "1.3.4"
  };
});