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

// Initial Values
var email = "";
var password = "";
var firstName = "";
var lastName = "";
var interested = "";
var dateDay = "";
var birthday = 0;
var zipcode = 0;
var about = "";

// Capture Button Click

$("#submit").on("click", function (event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    email = $("#email-input").val().trim().toLowerCase();
    password = $("#password-input").val().trim();
    firstName = $("#firstname-input").val().trim();
    lastName = $("#lastname-input").val().trim();
    interested = $("#intersested-input").val().trim();
    dateDay = $("#dateDay-input").val().trim();
    birthday = $("#birthday-input").val().trim();
    zipcode = $("#location-input").val().trim();
    about = $("#about-input").val().trim();

    var userExist = false;
    database.ref().orderByChild("email").equalTo(email).once("value", function (snapshot) {
        console.log(snapshot.val());
        var foundUsers = snapshot.val();
        if (foundUsers) {
            userExist = true;
        }
        console.log("LOGIN", userExist);

        if (!userExist) {
            console.log("LOGIN ashjdgash", userExist);
    
            // Code for the push
            database.ref().push({
                email,
                password,
                firstName,
                lastName,
                interested,
                dateDay,
                birthday,
                zipcode,
                about
    
    
    
                // Log everything that's coming out of snapshot
    
                // full list of items to the well
            }, function (errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });
            //after signUp it will take you to user profile page
            //window.location = "userprofile.html";
        }
        else{
            
        }
    });
    


});