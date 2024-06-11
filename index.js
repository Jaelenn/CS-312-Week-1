function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 to 6
    const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 to 6

    document.getElementById("dice1").src = `dice${randomNumber1}.png`;
    document.getElementById("dice2").src = `dice${randomNumber2}.png`;

    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("result").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("result").innerHTML = "Draw!";
    }
}
