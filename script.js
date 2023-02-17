
const options = ["rock","paper","scissors"];
const len = options.length;
let playerChoice;
let playerscore= 0;
let computerscore = 0;
let rounds =0;
//button logic:
/*
    query the button for paper
    add event listener
    add playround function to it
    set playerchoice to paper
    display player choice
*/
//storing elements in constants:
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors")
const computerChoiceText = document.querySelector(".computerChoice");
const playerChoiceText = document.querySelector(".playerChoice")
const gameResults = document.querySelector(".gameResults");
const scoreText = document.querySelector(".score");
const announcement = document.querySelector(".WinnerText")
const roundsText = document.querySelector(".rounds");
    


paper.addEventListener('click',()=>{
    if(rounds<5)
    {
        SetPlayerChoiceToPaper();
        let game_result = playRound("paper",getComputerChoice(options));
        game(game_result);
        rounds +=1;
        roundsText.textContent = "round: " + rounds.toString();
    }
    else{
       announceWinner()
       return;
    }
    
});



rock.addEventListener('click',()=>{
    if(rounds<5)
    {
        SetPlayerChoiceToRock();
        let game_result = playRound("rock",getComputerChoice(options));
        game(game_result)
        rounds +=1;
        roundsText.textContent = "round: "+ rounds.toString();
        
    }
    else
    {
        announceWinner()
        return;
    }
    
});


scissors.addEventListener('click',()=>{
    if(rounds<5)
    {
        SetPlayerChoiceToScissors();
        let game_result =playRound("scissors",getComputerChoice(options));
        game(game_result);
        rounds +=1;
        roundsText.textContent = "round: " + rounds.toString();
    }
    else
    {
        announceWinner();
        return;
    }
    
})



function SetPlayerChoiceToPaper()
{
    playerChoice = "paper";
    playerChoiceText.textContent = "you chose: " + playerChoice;

}

function SetPlayerChoiceToRock()
{
    playerChoice = "rock";
    playerChoiceText.textContent = "you chose: " + playerChoice;
}

function SetPlayerChoiceToScissors()
{
    playerChoice = "scissors";
    playerChoiceText.textContent = "you chose: " + playerChoice;
}

    function getComputerChoice(options_)
    {
        let computerChoice = options_[calculateRandomIndex()]
        return computerChoice;
    }


function calculateRandomIndex()
{
    return Math.floor(Math.random() * len );
}




function playRound(player_selection , computer_selection)
{
    let playerchoice = player_selection
    let computerchoice = computer_selection
    computerChoiceText.textContent = "the computer chose: " + computerchoice;
    //player chooses rock:
    if((playerchoice === "rock") &&( computerchoice === "rock"))
    {
        //console.log("even")
        gameResults.textContent = "even";
        return "even";
    }

    if((playerchoice === "rock") &&( computerchoice === "paper"))
    {
        gameResults.textContent = "you lose! paper beats rock";
        return "you lose! paper beats rock";
    }

    if((playerchoice === "rock") &&( computerchoice === "scissors"))
    {
        gameResults.textContent ="you win! rock beats scissor";
        return "you win! rock beats scissor";
    }

    //player chooses paper:
    if((playerchoice === "paper") &&( computerchoice === "paper"))
    {
        gameResults.textContent ="even";
        return "even";
    }

    if((playerchoice === "paper") &&( computerchoice === "rock"))
    {
        gameResults.textContent ="you win! paper beats rock";
        return "you win! paper beats rock";
    }


    if((playerchoice === "paper") &&( computerchoice === "scissors"))
    {
        gameResults.textContent ="you lost! scissors beats paper";
        return "you lost! scissors beats paper";
    }


//player chooses scissors
    if((playerchoice === "scissors") &&( computerchoice === "scissors"))
    {
    gameResults.textContent ="even";
    return "even";
    }

    if((playerchoice === "scissors") &&( computerchoice === "rock"))
    {
    gameResults.textContent ="you lose! rock beats scissors";
    return "you lose! rock beats scissors";
    }

    if((playerchoice === "scissors") &&( computerchoice === "paper"))
    {
    gameResults.textContent ="you win! scissors beats paper";
    return "you win! scissors beats paper";
    }
}
        
function game(result)
{
    
    if((result === "you win! rock beats scissor") || (result === "you win! paper beats rock") || (result === "you win! scissors beats paper") )
    {
        playerscore += 1
        scoreText.textContent ="player: " + playerscore + " computer :" + computerscore ;

    }
    else if(((result) === "you lose! rock beats scissors") || (result === "you lost! scissors beats paper") || (result === "you lose! paper beats rock") )
    {
        computerscore += 1
        scoreText.textContent = "player: " + playerscore + " computer :" + computerscore
    }
    else
    {
       
        scoreText.textContent = "player: " + playerscore + " computer :" + computerscore;
    }   
}


function announceWinner()
{   
    
    announcement.classList.add("winner-text");

    if(playerscore > computerscore)
        {
            announcement.textContent = "congratulations you win!";
        }
        else if ( playerscore < computerscore)
        {
            announcement.textContent ="unfortunately the computer has won";
        }
        else
        {
            announcement.textContent ="its a tie!";
        }
    
    
    
}
