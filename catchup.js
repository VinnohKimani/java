/**
 * Boolean expressions -> anything that returns true/ false
 * Comparison -> ===, ==, !==, !=
 * Logical  -> !!, &&, ||, !
 * Number -> >, <, <=, >=
 *
 * Statement + Execution sequence
 * Default sequence/execution order
 *
 * selection -> choose to run certain codes and not others
 * repetition -> choose to run certain codes till a condition is met
 *
 */

// Selection using switch
const age = 19;
const nationality = "Kenyan";
const constituency = "Juja";
const hasVoted = false;

if (age >= 18 && nationality === "Kenyan" && constituency === "Juja"  && hasVoted === false) {
  console.log("You can vote");
} else {
  //the else part allows us to account for falsiness
  console.log("You cannot vote");
}

// Multiple  Conditions
const fruit = "Watermelon";

if (fruit === "apple") {
  console.log("Placed in the apple Basket");
} else if (fruit === "Mango") {
  console.log("Placed in the Mango Basket");
} else if (fruit === "Banana") {
  console.log("Placed in the Banana Basket");
} else {
  console.log(`We do not have a basket for ${fruit}`);
}

// Selection using switch -> this is an assignment
console.log("Execution is still happenning");
