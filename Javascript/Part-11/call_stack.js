function One() {
  console.log("Entering function One");
  Two();
  console.log("Exiting function One");
}

function Two() {
  console.log("Entering function Two");
  Three();
  console.log("Exiting function Two");
}

function Three() {
  console.log("Entering function Three");
  // No further calls
  console.log("Exiting function Three");
}

console.log("Starting call stack demo...");
One();
console.log("Call stack completed.");
