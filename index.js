var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; // generates random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png";  // generates a random dice from dice1 to dice6 and store it in the variable

var randomImageSource = "images/" + randomDiceImage; //stores the source of the random dice obtained in the above step into the variable randomImageSource

var image1 = document.querySelectorAll("img")[0]; // select all the elements with img tag and more specifically the first image tag from all the img tag

image1.setAttribute("src", randomImageSource); // change the src attribute of the img tag to randomImageSource to generate random dice imges for player 1


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomImageSource > randomImageSource2) {     // check the condtition which is big among player 1 and player 2
  document.querySelector("h1").innerHTML = "Player 1 wins!";  // change the text of h1 to the new text "player 1 wins" after comparison
}
else if (randomImageSource2 > randomImageSource){
  document.querySelector("h1").innerHTML = "player 2 wins!";
}
else if (randomImageSource == randomImageSource2){
  document.querySelector("h1").innerHTML = "Draw";
}
