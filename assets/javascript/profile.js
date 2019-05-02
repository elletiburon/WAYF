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

$("#welcome").text(sessionStorage.getItem("firstName"));
$("#Age").text(sessionStorage.getItem("birthday"));
$("#location").text(sessionStorage.getItem("zipcode"));
$("#day-available").text(sessionStorage.getItem("dateDay"));
$("#bio").text(sessionStorage.getItem("about"));


$("#new-match-btn").on("click", function (event) {
    event.preventDefault();
    window.location = "matchpage.html"
});