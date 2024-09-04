console.log("Hello world");

let playerScore = 0;
let compScore = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;
    let compPick = "rock";
    if (choice == 1)
    {
        compPick = "paper";
    }
    else if (choice == 2)
    {
        compPick = "scissors";
    }
    else {
        compPick = "rock";
    }
    return compPick;
}

function getHumanChoice()
{
    while (true)
    {
        let choice = prompt("Choose rock, papers, or scissors.");
        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "r" )
        {
            return choice;
        }
        else if (choice.toLowerCase() == "paper" || choice.toLowerCase() == "p" )
        {
            return choice;
        }
        else if (choice.toLowerCase() == "scissors" || choice.toLowerCase() == "s" )
        {
            return choice;
        }
        else {
            alert("I didn't understand that; try again.")
        }
    }
}

let compChoice = getComputerChoice();
let playerChoice = getHumanChoice();