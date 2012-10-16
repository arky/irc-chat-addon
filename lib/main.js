var self = require("self");

var mypanel = require("panel").Panel({
    width: 600,
    height: 500,
    contentURL: "http://webchat.freenode.net/"
});


var mywidget = require("widget").Widget({
  id: "Freenode_Icon",
  label: "Freenode IRC Client",
  width: 16,
  height: 16,
  contentURL: self.data.url("irc.png"),
  panel: mypanel
  });
