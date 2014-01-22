var data = require("sdk/self").data;

var mypanel = require("sdk/panel").Panel({
    width: 600,
    height: 500,
    contentURL: "http://webchat.freenode.net/"
});


var mywidget = require("sdk/widget").Widget({
  id: "Freenode_Icon",
  label: "Freenode IRC Client",
  width: 16,
  height: 16,
  contentURL: data.url("irc.png"),
  panel: mypanel
  });
