/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    isclosed: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function () {
        if (umbrella.isclosed === true) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isclosed = true;
            umbrella.isOpen = false;
            return "Julia closes the umbrella!"
        }
    }
};
