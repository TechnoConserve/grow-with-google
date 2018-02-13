/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Avery Uslaner",
    friends: 999999,
    messages: [
        "Post one.", "Post two.", "Post three."
    ],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
};
