const computerImage = document.querySelector(".computer img");
const playerImage = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const message = document.querySelector(".message");


options.forEach((option) => {
    option.addEventListener("click", () => {
        computerImage.classList.add("shakeComputer");
        playerImage.classList.add("shakePlayer");


        setTimeout(() => {
            computerImage.classList.remove("shakeComputer");
            playerImage.classList.remove("shakePlayer");


            playerImage.src = "./assets/images/" + option.innerHTML + "Player.png";

            const choice = ["ROCK", "PAPER", "SCISSORS"];
            let arrayNo = Math.floor(Math.random() * 3);
            let computerChoice = choice[arrayNo];
            computerImage.src = "./assets/images/" + computerChoice + "Computer.png";

            let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);


            if (option.innerHTML === "ROCK") {
                if (computerChoice === "PAPER")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "SCISSORS")
                    playerPoints.innerHTML = pPoints + 1;
            } else if (option.innerHTML === "PAPER") {
                if (computerChoice === "SCISSORS")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "ROCK")
                    playerPoints.innerHTML = pPoints + 1;
            } else {
                if (computerChoice === "ROCK")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "PAPER")
                    playerPoints.innerHTML = pPoints + 1;
            }


            // Check if either player has reached 3 points
            if (parseInt(computerPoints.innerHTML) === 3) {
                message.innerHTML = "COMPUTER WINS!";
                message.classList.add("winner_message");

                setTimeout(() => {
                    resetGame();
                }, 3000);

            } else if (parseInt(playerPoints.innerHTML) === 3) {
                message.innerHTML = "PLAYER WINS!"
                message.classList.add("winner_message");
                setTimeout(() => {
                    resetGame();
                }, 3000);
            }



        }, 900);

    });
});



function resetGame() {
    // Reset points to 0
    computerPoints.innerHTML = "0";
    playerPoints.innerHTML = "0";

    // Reset images
    computerImage.src = "./assets/images/rockComputer.png";
    playerImage.src = "./assets/images/rockPlayer.png";

    //Reset Message 
    message.classList.remove("winner_message");
    message.innerHTML = "CHOOSE AN OPTION!"
}