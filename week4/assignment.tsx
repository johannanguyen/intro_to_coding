// Set the maximum number of floors in the building to 10
const MAX_FLOORS: number = 10;

// Set the elevator's current floor to 1
let currentFloor: number = 1;

// Set the destination floor to 8
let destinationFloor: number = 8;

// Set the number of stops made to 0
let stopsMade: number = 0;

// While the current floor is less than the destination floor:
    // Add 1 to the current floor
    // Add 1 to the number of stops made
    // Print "Elevator is now on floor [current floor]"
while (currentFloor < destinationFloor) {
    currentFloor++;
    stopsMade += 1;
    console.log(`Elevator is now on floor ${currentFloor} good job!`);
}

// If the number of stops made is greater than 5:
    // Print "That was a long ride! The elevator made [number of stops] stops."
if (stopsMade > 5) {
    console.log(`That was a long ride! The elevator made ${stopsMade} stops.`);
}
// Otherwise:
    // Print "Quick ride! The elevator made [number of stops] stops."
else {
    console.log(`Quick ride! The elevator made ${stopsMade} stops.`);
}

// Print "You have arrived at floor [current floor]."
console.log(`You have arrived at floor ${currentFloor}.`);