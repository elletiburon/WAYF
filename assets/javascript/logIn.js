var attempt = 2; // Variable to count number of attempts.
            $("#logIn").on("click", function (event) {
                event.preventDefault();

                var email = $("#email").val().trim();
                var password = $("#password").val().trim();
                var valid = false;
                var arrayOfEmail = ["Abdul@gmail.com", "Daneil@gmail.com"];
                var arrayOfpassword = ["1234", "5678"];
                console.log(email, password, arrayOfEmail, arrayOfpassword);
                for (var i = 0; i < arrayOfEmail.length; i++) {
                    if ((email == arrayOfEmail[i]) && (password == arrayOfpassword[i])) {
                        console.log("its working");
                        valid = true;
                        break;
                    }
                }
                if (valid) {
                    console.log("log in was succesfull");
                    window.location = "userprofile.html";
                    return false;
                }
                var again = "tries";
                if (attempt == 1) {
                    again = "try";
                }
                if (attempt >= 1) {
                    alert("wrong password or email")
                    attempt--;
                } else {
                    alert("Incorrect password or email");
                    email = "You are now Blocked";
                    password = "";
                    $("#email").disabled = true;
                    $("#password").disabled = true;
                    return false;

                }

            });