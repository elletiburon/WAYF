
$("#welcome").text("Welcome Daniel");
$("#Age").text("15");
$("#username").text("Daniel");
$("#day-available").text("Tuesday");
$("#bio").text("TEST TEST TEST");


database.ref().on("value", function(snapshot) {

    // Log everything that’s coming out of snapshot
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
