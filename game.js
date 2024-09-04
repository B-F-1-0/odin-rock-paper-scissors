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

function playRound(player,computer)
{
    // first, determine if it is a draw and if so, quit round
    if (player == computer)
    {
        console.log("You both picked " + player + " and draw. No points for either of you.");
        return "draw";
    }
    // otherwise, determine who won
    if (player == "rock")
    {
        if (computer == "scissors")
        {
            console.log("You picked " + player + " and I picked " + computer + ". Have a point, jamblasted.");
            return "player";
        }
        else {
            console.log("You picked " + player + " and I picked " + computer + ". Ha I win!");
            return "comp";
        }
    }
    if (player == "paper")
    {
        if (computer == "rock")
        {
            console.log("You picked " + player + " and I picked " + computer + ". Have a point, jamblasted.");
            return "player";
        }
        else {
            console.log("You picked " + player + " and I picked " + computer + ". Ha I win!");
            return "comp";
        }
    }
    if (player == "scissors")
        {
            if (computer == "paper")
            {
                console.log("You picked " + player + " and I picked " + computer + ". Have a point, jamblasted.");
                return "player";
            }
            else {
                console.log("You picked " + player + " and I picked " + computer + ". Ha I win!");
                return "comp";
            }
        }
}

function playGame()
{   
    const compChoice = getComputerChoice();
    const playerChoice = getHumanChoice();

    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++)
    {
        console.log(i);
        let winner = playRound(playerChoice,compChoice);
        if (winner == "player")
        {
            playerScore += 1;
        }
        else if (winner == "comp")
        {
            compScore += 1;
        }
    }
    console.log("The result is you won " + playerScore + " times while I won " + compScore + " times.");
}

playGame();