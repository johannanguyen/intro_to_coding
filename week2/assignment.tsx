const MAX_LIVES: number = 3;
let playerName: string = "Jordan";
let playerLives: number = MAX_LIVES;
let opponentLives: number = MAX_LIVES;
let isGameOver: boolean = false;

// Simulate a dice roll (1–6)
const playerRoll: number = Math.floor(Math.random() * 6) + 1;
const opponentRoll: number = Math.floor(Math.random() * 6) + 1;

console.log(`${playerName} rolled: ${playerRoll}`);
console.log(`Opponent rolled: ${opponentRoll}`);

if (playerRoll < opponentRoll) {
    playerLives -= 1;
    console.log(`${playerName} loses a life! Lives remaining: ${playerLives}`);
} else if (opponentRoll < playerRoll) {
    opponentLives -= 1;
    console.log(`Opponent loses a life! Lives remaining: ${opponentLives}`);
} else {
    console.log("It's a tie! Nobody loses a life.");
}

// We have only simulated one dice roll so far
// How could we add another one?

// Will the below code block run give the current state of the game?
if (playerLives === 0) {
    isGameOver = true;
    console.log(`Game over! ${playerName} has been defeated.`);
} else if (opponentLives === 0) {
    isGameOver = true;
    console.log("Game over! You defeated the opponent!");
}