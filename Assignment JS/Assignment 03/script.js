let low = 1;
let high = 10;
let correctAns = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;

function checkGuess() {
    const guess = document.getElementById("guess").value;
    const result = document.getElementById("result");

    if (chances > 0) {
        if (guess == correctAns) {
            result.textContent = "You Win!";
        return 0;
        } else if (guess < correctAns) {
            result.textContent = "Correct answer is greater!";
            chances--;
        } else {
            result.textContent = "Correct answer is smaller!";
            chances--;
        }
    } else {
        result.textContent = "You Lose!";
    }

    document.getElementById("guess").value = "";
}
