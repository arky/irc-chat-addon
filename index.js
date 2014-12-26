var panels = require("sdk/panel");
var { ToggleButton } = require("sdk/ui/button/toggle");

// Panel code
var panel = panels.Panel({
    width: 600,
    height: 500,
    contentURL: "http://webchat.freenode.net/",
    onHide: handleHide
});


// Button code
var button = ToggleButton({
    id: "Freenode_Icon",
    label: "Freenode IRC Client",
    icon: {
	"16": "./irc.png"
    },
    onChange: handleChange
});

// Handle Button Change
function handleChange(state) {
    if (state.checked){
	panel.show({position:button});
    }

}

// Handle panel hiding
function handleHide(){
    button.state("window", {checked: false});
}
