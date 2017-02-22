module.exports = function (window) {
    if (process && process.title != "browser") {
        window.jQuery = window.$ = require("jquery")(window);
      } else {
        window.jQuery = window.$ = require("jquery");
      }

    window.React = require("react");
    window.ReactDOM = require("react-dom");
    window.lodash = require("lodash");
    window.Nuclear = require("nuclear-js");
    window.Immutable = Nuclear.Immutable;
};
