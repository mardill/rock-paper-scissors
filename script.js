var play = confirm("Do you want to play rock, paper, scissors?");

var userChoice = {}

if(play){
var choice = prompt("Choose rock, paper, or scissors.");
}
else{alert("Ok!")
}


var compChoice = Math.random() 


function computer() {
    if(compChoice < 0.34){
            compChoice="paper";
    }
        else if(compChoice <= 0.66){
            compChoice="rock";
        }
        else{
            compChoice="scissors";
        }

        return compChoice
    }


console.log(computer())

function game(user,comp){
    if(userChoice === "rock" && compChoice === "scissors" ){
        confirm("Computer chose: " + compChoice + ". You win!");
    }
    else if(userChoice === "rock" && compChoice === "paper"){
        confirm("Computer chose: " + compChoice + ". You lose :(")
    }
}


game(userChoice,compChoice)


