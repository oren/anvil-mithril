var m = require('mithril');
var j2c = require('j2c');

var $ = document.querySelector.bind(document);
var session = require('./components/session.js');
var callback = require('./components/callback.js');


Anvil.configure({
  issuer:       'https://connect.anvil.io',
  client_id:    'a0764ec2-2d1a-4a11-a04f-41df249dafb8',
  redirect_uri: 'http://connect.anvil.io:3001/callback',
  //display:      'page',
  //scope:        'realm'
});

Anvil.deserialize();


//m.mount($('body'), session);
m.route.mode = 'pathname';


m.route(document.body, "/", {
  '/': session,
  '/callback': session
});


