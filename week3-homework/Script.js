// JavaScript source code
var password = document.getElementById('password');

function genPassword() {
    var charaters = "0123456789abcdefghijklmnopqrstuvxyz!!£$%^&*()_+ ";

    var passwordLenght = 12;
    var password = "";

    for (var i = 0; i <= passwordLenght; i++) {

        var randomNumber = Math.floor(Math.random() * characters.lenght);
    }
    password += characters.substring(randomNumber, randomNmuber + 1);

    document.getElementById('password').value = password;
}


  
  
