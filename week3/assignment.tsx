const MAX_LIVES: number = 5;
let playerName: string = "Jordan";
let playerLives: number = MAX_LIVES;
let opponentLives: number = MAX_LIVES;

let round: number = 1;
let totalRounds: number = 1;

while (playerLives > 0 && opponentLives > 0) {
    // Simulate a dice roll (1–6)
    const playerRoll: number = Math.floor(Math.random() * 6) + 1;
    const opponentRoll: number = Math.floor(Math.random() * 6) + 1;

    console.log(`${playerName} rolled: ${playerRoll}`);
    console.log(`Opponent rolled: ${opponentRoll}`);
    console.log(`Round ${round}`)
    
    if (playerRoll < opponentRoll) {
        playerLives -= 1;
        console.log(`${playerName} loses a life! Lives remaining: ${playerLives}`);
    } else if (opponentRoll < playerRoll) {
        opponentLives -= 1;
        console.log(`Opponent loses a life! Lives remaining: ${opponentLives}`);
    } else {
        console.log("It's a tie! Nobody loses a life.");
    }
    round++;
    // round = 6
}

if (playerLives === 0) {
    console.log(`Game over! ${playerName} has been defeated.`);
} else {
    console.log("Game over! You defeated the opponent!");
}

totalRounds = round - 1;
console.log("Total rounds played: " + totalRounds)
// -----------------------------------
// CHALLENGES
// -----------------------------------

// CHALLENGE 1 (Easy):
// Change MAX_LIVES to 5. How does that affect the game?
// It would likely make the game have more dice rolls.

// CHALLENGE 2 (Easy):
// Print the round number each time the loop runs.
// Hint: create a variable called "round" before the loop and increment it each round.

// CHALLENGE 3 (Medium):
// Print a summary at the end showing how many rounds were played.