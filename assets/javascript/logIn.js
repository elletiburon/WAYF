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
                        console.log("found",foundUsers[key]);
                        console.log(foundUsers[key].password);
                        if (foundUsers[key].password == password) {
                            user = foundUsers[key];
                            console.log("LOGIN!!!!!")   
                        }
                        sessionStorage.setItem("firstName", foundUsers[key].firstName);
                        sessionStorage.setItem("email", foundUsers[key].email);
                        sessionStorage.setItem("birthday", foundUsers[key].birthday);
                        sessionStorage.setItem("zipcode", foundUsers[key].zipcode);
                        sessionStorage.setItem("dateDay", foundUsers[key].dateDay);
                        sessionStorage.setItem("about", foundUsers[key].about);
                    }
                    console.log("LOGIN", user)
                    if (user){
                        window.location = "userprofile.html";
                    }
            database.ref().on("value", function(snapshot) {
                
                // Log everything that’s coming out of snapshot

                console.log("fire=========================================");
                
                console.log(snapshot.val());
                console.log(snapshot.val().name);
                console.log(snapshot.val().email);
                console.log(snapshot.val().age);
                console.log(snapshot.val().comment);
                
                // Change the HTML to reflect
                $("#welcome").text(snapshot.val().name);
                $("#Age").text(snapshot.val().age);
                $("#username").text(snapshot.val().name);
                $("#day-available").text(snapshot.val().dateDay);
                $("#bio").text(snapshot.val().about);
                $("#location").text(snapshot.val().zipcode);
                
                
                
                // Handle the errors
            }, function(errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });
        })

        });
