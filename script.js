
const options = ["rock","paper","scissors"];
const len = options.length;
//getComputerChoice(choice);
//playerselection("scissors");

//console.log(playRound(playerselection("scissors"),getComputerChoice(options)));
game();
function getComputerChoice(options_)
{
    let computerChoice = options_[calculateRandomIndex()]
    console.log("the computer has chosen : " + computerChoice);
    return computerChoice;
}


function calculateRandomIndex()
{
    return Math.floor(Math.random() * len );
}



function playerselection(playerchoice )
{
   let playerchoice_ = playerchoice.toLowerCase();
    switch (playerchoice_)
    {
        case "rock":
            console.log( "your choice " + playerchoice_);
            break;

        case "paper":
            console.log("your choice: " + playerchoice_);
            break;
        case "scissors":
            console.log("your choice: " + playerchoice_);
            break;

        default:console.log("not a valid choice");
                break;
    }
        return playerchoice_;
}


function playRound(player_selection , computer_selection)
{
    let playerchoice = player_selection
    let computerchoice = computer_selection
    
    //player chooses rock:
    if((playerchoice === "rock") &&( computerchoice === "rock"))
    {
        //console.log("even")
        return "even";
    }

    if((playerchoice === "rock") &&( computerchoice === "paper"))
    {
        //console.log("you win! rock beats paper")
        return "you lose! paper beats rock";
    }

    if((playerchoice === "rock") &&( computerchoice === "scissors"))
    {
        //console.log("you lost! scissors beats paper")
        return "you win! rock beats scissor";
    }

    //player chooses paper:
    if((playerchoice === "paper") &&( computerchoice === "paper"))
    {
        //console.log("even")
        return "even";
    }

    if((playerchoice === "paper") &&( computerchoice === "rock"))
    {
        //console.log("you win! paper beats rock")
        return "you win! paper beats rock";
    }


    if((playerchoice === "paper") &&( computerchoice === "scissors"))
    {
        //console.log("you lost! scissors beats paper")
        return "you lost! scissors beats paper";
    }


    //player chooses scissors
    if((playerchoice === "scissors") &&( computerchoice === "scissors"))
    {
        //console.log("even")
        return "even";
    }

    if((playerchoice === "scissors") &&( computerchoice === "rock"))
    {
        //console.log("you lose! rock beats scissors")
        return "you lose! rock beats scissors";
    }

    if((playerchoice === "scissors") &&( computerchoice === "paper"))
    {
        //console.log("you win! scissors beats paper")
        return "you win! scissors beats paper";
    }

    
}

function game()
{
    let playerscore= 0;
    let computerscore = 0;


    for(let i = 0 ; i < 5; i++)
    {
        let player_input = prompt("Please choose rock,paper or scissors, type your answer below", "scissors").toString()
        let player_choice= playerselection(player_input);
        if(player_choice === "not a valid choice")
        {
          console.log("invalid input : Skipping")
          continue;
        }


      let comp_choice = getComputerChoice(options);
      console.log( playRound(player_choice , comp_choice));


      if((playRound(player_choice , comp_choice) === "you win! rock beats paper") || (playRound(player_choice , comp_choice) === "you win! paper beats rock") || (playRound(player_choice , comp_choice) === "you win! scissors beats paper") )
      {
        playerscore += 1
        console.log("player: " + playerscore + " computer :" + computerscore + "\n" + "\n");
        
      }
      else if((playRound(player_choice , comp_choice) === "you lose! rock beats scissors") || (playRound(player_choice , comp_choice) === "you lost! scissors beats paper") || (playRound(player_choice , comp_choice) === "you lose! paper beats rock") )
      {
        computerscore += 1
        console.log("player: " + playerscore + " computer :" + computerscore + "\n" + "\n");
        
      }
      else
      {
        console.log("player: " + playerscore + " computer :" + computerscore + "\n" + "\n");

      }
    }

    if(playerscore > computerscore)
    {
        console.log("congratulations you win!")
    }
    else if ( playerscore < computerscore)
    {
        console.log("unfortunately the computer has won")
    }
    else
    {
        console.log("its a tie!")
    }

}