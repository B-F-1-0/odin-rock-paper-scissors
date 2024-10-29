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

function playRound(player,computer)
{
    // first, determine if it is a draw and if so, quit round
    if (player == computer)
    {
        return "draw";
    }
    // otherwise, determine who won
    if (player == "rock")
    {
        if (computer == "scissors")
        {
            return "player";
        }
        else {
            return "comp";
        }
    }
    if (player == "paper")
    {
        if (computer == "rock")
        {
            return "player";
        }
        else {
            return "comp";
        }
    }
    if (player == "scissors")
        {
            if (computer == "paper")
            {
                return "player";
            }
            else {
                return "comp";
            }
        }
}

let playerScore = 0;
let compScore = 0;

function playGame(choice)
{   
    if (playerScore == 5 || compScore == 5)
    {
        return;
    }
    let winner;
    let winnermessage;

    let compChoice = getComputerChoice();
    let playerChoice = choice;
    winner = playRound(playerChoice,compChoice);
    if (winner == "player")
    {
        playerScore += 1;
    }
    else if (winner == "comp")
    {
        compScore += 1;
    }

    switch (winner)
    {
        case "player":
            winnermessage = "You won the round.";
            break;
        case "comp":
            winnermessage = "I won lol.";
            break;
        default:
            winnermessage = "No points for either of you."
            break;
    }

    resultsdiv.textContent = "You picked " + playerChoice + " while I picked " + compChoice +". " + winnermessage + " Your Score: " + playerScore + ", AI Score: " + compScore;
    if (playerScore == 5 || compScore == 5)
    {
        const gameovermessage = document.createElement('div');
        if (playerScore == 5)
        {
            gameovermessage.textContent = "Game over. You won, but like I care about this luck-based game. Refresh the page to play again."
        }
        else
        {
            gameovermessage.textContent = "Game over. Looks like you lost this round, heh. Refresh the page to play again."
        }
        resultsdiv.appendChild(gameovermessage);
    }
}
// rock button
const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => {
    playGame("rock");
});

// paper button
const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () => {
    playGame("paper");
});

// scissors button
const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", () => {
    playGame("scissors");
});

// results div
const resultsdiv = document.createElement('div');
resultsdiv.textContent = "Your Score: 0, AI Score: 0";
results.appendChild(resultsdiv);