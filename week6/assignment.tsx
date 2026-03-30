const MAX_LIVES: number = 5;

const player = {
    name: "Jordan",
    lives: MAX_LIVES
};

const opponent = {
    name: "Opponent",
    lives: MAX_LIVES
};

// array to keep a log of each round result
const roundLog: string[] = [];

// tracks the current round number, starts at 1
let round: number = 1;

// keep looping as long as both players have lives
while (player.lives > 0 && opponent.lives > 0) {

    // roll a random number between 1 and 6 for the player
    const playerRoll: number = Math.floor(Math.random() * 6) + 1;

    // roll a random number between 1 and 6 for the opponent
    const opponentRoll: number = Math.floor(Math.random() * 6) + 1;

    console.log(`Round ${round}`);
    console.log(`${player.name} rolled: ${playerRoll}`);
    console.log(`${opponent.name} rolled: ${opponentRoll}`);

    // will hold a description of what happened this round
    let result: string;

    // opponent rolled higher, player loses a life
    if (playerRoll < opponentRoll) {

        // subtract one life from the player
        player.lives -= 1;
        result = `${player.name} lost a life! Lives remaining: ${player.lives}`;

    // player rolled higher, opponent loses a life
    } else if (opponentRoll < playerRoll) {

        // subtract one life from the opponent
        opponent.lives -= 1;
        result = `${opponent.name} lost a life! Lives remaining: ${opponent.lives}`;

    // both rolled the same number
    } else {
        result = "It's a tie! Nobody loses a life.";
    }

    console.log(result);

    // add the result to the round log array
    roundLog.push(`Round ${round}: ${result}`);

    // move to the next round
    round++;
}

// player ran out of lives
if (player.lives === 0) {
    console.log(`Game over! ${player.name} has been defeated.`);
    
// opponent ran out of lives
} else {
    console.log(`Game over! ${player.name} wins!`);
}

// print the total number of rounds (minus 1 because round incremented before the loop ended)
console.log("Total rounds played: " + (round - 1));

// loop through every item in the round log and print each round's result
console.log("\n--- Round Summary ---");
for (let i = 0; i < roundLog.length; i++) {
    console.log(roundLog[i]);
}