const css = require('css');

const EOF = require("EOF");

const layout = require("./layout.js");

let currentToken = null;

let currentAttribute = null;

let stack = [{type: "document", children:[]}];
let currentTextNode = null;

let rules = [];
function addCSSRules(text) {
  var ast = css.parse(text);
  rules.push(...ast.stylesheet.rules);
}

module.exports.parseHTML = function parseHTML(html){
  console.log(html);
}