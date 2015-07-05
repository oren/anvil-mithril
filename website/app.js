var m = require('mithril');
var j2c = require('j2c');

var $ = document.querySelector.bind(document);
var session = require('./components/session.js');

m.mount($('body'), session);

