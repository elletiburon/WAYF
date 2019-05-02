var config = {
    apiKey: "AIzaSyDR_r33Wa1FGkjlSph81ZV53WqTrdoHcqI",
    authDomain: "project1-21d42.firebaseapp.com",
    databaseURL: "https://project1-21d42.firebaseio.com",
    projectId: "project1-21d42",
    storageBucket: "project1-21d42.appspot.com",
    messagingSenderId: "718469816684"
};

firebase.initializeApp(config);

var database = firebase.database();

var myEmail = sessionStorage.getItem("email")
var user2Email = sessionStorage.getItem("matchEmail")

var refPath = "chat-";
if (myEmail < user2Email) {
    refPath += myEmail.replace(/\./g, "_") + "-" + user2Email.replace(/\./g, "_");
}
else {
    refPath += user2Email.replace(/\./g, "_") + "-" + myEmail.replace(/\./g, "_");
}

database.ref(refPath).on("child_added", function (snapshot) {
    console.log(snapshot.val())
    var chat = snapshot.val()
    var chatHTML = $("<div>").text(chat.message).appendTo("#messages")

    if (chat.email == myEmail) {
        chatHTML.addClass("me")
        
    }
    else {
        chatHTML.addClass("notMe")
    }


})

$("#send-message").on("click", function () {

    var message = $("#message").val()
    database.ref(refPath).push({ email: myEmail, message: message })

    $("#message").val("")
})
