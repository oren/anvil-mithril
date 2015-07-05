var m = require('mithril');
var j2c = require('j2c');

// this component uses the anvil-client (anvil-connect.js) to determine it's state
// https://github.com/anvilresearch/connect-js
// states: not logged-in, logged-in

var session = {};

session.controller = function() {
  if(location.hash) {
    var response = Anvil.parseFormUrlEncoded(location.hash.substring(1))
    console.log('LOCATION HASH', response)

    Anvil.getKeys().then(function (keys) {
      function success (session) {
        console.log('CALLBACK SUCCESS', session, Anvil.sessionState);
        m.route('/')
        // redirect to '/'
      }
      function failure (fault) {
        console.log('CALLBACK FAILURE', fault);
        // wtf
      }
      Anvil.callback(response).then(success, failure)
    })
  }
};

session.styles = j2c.scoped({
  title: {
    font_size: '3rem',
    "&:before":{
      color: "#888",
      content: "#"
    }
  }
})

session.view = function() {
  if(Anvil.session.userInfo) {
    return m('div', [
      m('a', { href: '#' }, 'Hello ' + Anvil.session.userInfo.email),
      m('a', { href: '#', onclick: Anvil.signout() }, 'Signout')
    ]);

//    return m('div', {class: session.styles.title}, 'Hello ' + Anvil.session.userInfo.email);
  }

  return m("a", {href: Anvil.uri()}, 'Sign in');
};

module.exports = session;
