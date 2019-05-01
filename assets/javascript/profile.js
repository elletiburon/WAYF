$("#welcome").text(sessionStorage.getItem("firstName"));
$("#Age").text(sessionStorage.getItem("birthday"));
$("#location").text(sessionStorage.getItem("zipcode"));
$("#day-available").text(sessionStorage.getItem("dateDay"));
$("#bio").text(sessionStorage.getItem("about"));


$("#new-match-btn").on("click", function (event) {
    event.preventDefault();
    window.location = "matchpage.html"
});