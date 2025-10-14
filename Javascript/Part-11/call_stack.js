/**
 * JavaScript Execution Context and Call Stack Visualization
 * Demonstrates how JavaScript executes code using call stack
 *
 * @file Visualizes execution context, hoisting, and call stack behavior
 * @author Akhlaque Ansari.
 */

console.log("==============================");
console.log("🧠 JavaScript Call Stack Demonstration");
console.log("==============================\n");

/**
 * Demonstrates function execution order and call stack
 */
console.log("--- Call Stack Order Example ---");
function firstFunction() {
  console.log("1. First function executing - added to call stack");
  secondFunction();
  console.log("5. First function completing - removed from call stack");
}

function secondFunction() {
  console.log("  2. Second function executing - added to call stack");
  thirdFunction();
  console.log("  4. Second function completing - removed from call stack");
}

function thirdFunction() {
  console.log("    3. Third function executing - added to call stack");
  console.log("    3. Third function completing - removed from call stack");
}
firstFunction();

/**
 * Demonstrates hoisting behavior
 */
console.log("\n--- Hoisting Demonstration ---");
console.log("Variable before declaration:", typeof hoistedVar); // undefined
console.log("Function before declaration:", typeof hoistedFunction); // function

var hoistedVar = "I was hoisted";
function hoistedFunction() {
  return "I was hoisted too!";
}

console.log("Variable after declaration:", hoistedVar);
console.log("Function after declaration:", hoistedFunction());

/**
 * Complex call stack with nested functions
 */
console.log("\n--- Complex Call Stack Example ---");
function complexExample() {
  function levelOne() {
    console.log("Level 1 - Enter");
    levelTwo();
    console.log("Level 1 - Exit");
  }
  function levelTwo() {
    console.log("  Level 2 - Enter");
    levelThree();
    console.log("  Level 2 - Exit");
  }
  function levelThree() {
    console.log("    Level 3 - Enter");
    console.log("    Level 3 - Exit");
  }
  levelOne();
}
complexExample();

/**
 * Call stack with different execution contexts
 */
console.log("\n--- Execution Context Types ---");

// Global context
console.log("Global context (should be true in Node):", this === globalThis);

// Function context (in strict mode, `this` is undefined; otherwise, global object)
function showContext() {
  console.log("Function context - this:", this);
}
showContext();

// Method context (`this` refers to the object)
const obj = {
  name: "Test Object",
  showContext: function () {
    console.log("Method context - this:", this);
  },
};
obj.showContext();

console.log("\n--- Call Stack Summary ---");
console.log("- LIFO (Last In, First Out) structure");
console.log("- Tracks execution context of running functions");
console.log("- Manages function invocation and return");
console.log("- Single-threaded nature demonstrated");
