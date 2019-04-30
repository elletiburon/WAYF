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
console.log(database);

var attempt = 2; // Variable to count number of attempts.
            $("#logIn").on("click", function (event) {
                event.preventDefault();

                var email = $("#email").val().trim();
                var password = $("#password").val().trim();
                var user = null;
                database.ref().orderByChild("email").equalTo(email).once("value", function(snapshot){
                    console.log(snapshot.val());
                    var foundUsers = snapshot.val();
                    for (var key in foundUsers) {
                        console.log(foundUsers[key]);
                        if (foundUsers[key].password == password) {
                            user = foundUsers[key];
                            window.location = "userprofile.html";
                        }
                    }
                    console.log("LOGIN", user)

                })

            });