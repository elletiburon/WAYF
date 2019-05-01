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

var user1Email = "bob@bob.com"
var user2Email = "steve@steve.com"

var refPath = "chat-" + user1Email.replace(".", "_") + "-" + user2Email.replace(".", "_");

database.ref(refPath).on("child_added", function(snapshot){
    console.log(snapshot.val())

    $("<div>").text(snapshot.val()).appendTo("#messages")

})
 
$("#send-message").on("click", function(){
   
    var message = $("#message").val()
    database.ref(refPath).push(message)

    $("#message").val("")
})
