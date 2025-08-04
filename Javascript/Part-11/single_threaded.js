console.log(`Starting single-threaded JavaScript execution...`);

setTimeout(() => {
    console.log("This is executed after a delay, simulating asynchronous behavior.");
}, 1000); // This will not block the main thread
console.log("This message is logged immediately after the setTimeout call.");

