
const choice = ["rock","paper","Scissors"];
const len = choice.length
getComputerChoice(choice);
playerselection("Scissors")

function getComputerChoice(choice_)
{
    console.log("the computer has chosen : " + choice_[calculateRandomIndex()])
}


function calculateRandomIndex()
{
    return Math.floor(Math.random() * len);
}



function playerselection(playerchoice )
{
   let playerchoice_ = playerchoice.toLowerCase()
    switch (playerchoice_)
    {
        case "rock":
            console.log(playerchoice_)
            break;

        case "paper":
            console.log(playerchoice_)
            break;
        case "scissors":
            console.log(playerchoice_)
            break;

        default:console.log("not a valid choice")
                break;
    }
    return playerchoice_
}