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

$("#welcome").text("Welcome " + sessionStorage.getItem("firstName") + "!");
$("#Age").text(sessionStorage.getItem("birthday"));
$("#location").text(sessionStorage.getItem("zipcode"));
$("#day-available").text(sessionStorage.getItem("dateDay"));
$("#bio").text(sessionStorage.getItem("about"));


$("#new-match-btn").on("click", function (event) {
    event.preventDefault();
    var dateDay = sessionStorage.getItem("dateDay");
  database.ref().orderByChild("dateDay").equalTo(dateDay).once("value", function(snapshot){
    var foundMatch = snapshot.val();
    console.log(foundMatch);
    
    for (var key in foundMatch) {
        console.log(sessionStorage.getItem("email"));
        if (foundMatch[key].email == sessionStorage.getItem("email")){
            console.log("yourself");
        }else {
            console.log("found",foundMatch[key]);
            var tbody = $('tbody');
            var tRow = $("<tr>");
            var firstName = $("<td>");
            firstName.attr('id', foundMatch[key].email);
            firstName.addClass("firstName");
            firstName.text(foundMatch[key].firstName);
            var age = $("<td>");
            var bio = $("<td>");
          
            age.text(foundMatch[key].birthday);
            bio.text(foundMatch[key].about);
            tRow.append(firstName, age, bio);
            tbody.append(tRow)
        }      
    }
    
  });
  });
  
  
  $(document).on("click", ".firstName", function(event){
    console.log("I've been clicked!", this);
    var matchEmail = $(this).attr('id');
    console.log(matchEmail);
    sessionStorage.setItem("matchEmail", matchEmail);
    window.location = "matchpage.html"

      });