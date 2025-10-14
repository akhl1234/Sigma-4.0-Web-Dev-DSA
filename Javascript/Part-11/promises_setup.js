/**
 * Advanced Promise Patterns and Implementation
 * Demonstrates comprehensive promise usage from basic to advanced scenarios
 *
 * @file Shows promise chains, error handling, and real-world patterns
 * @author Akhlaque Ansari
 */

// Helper for consistent logging
const log = (msg) => console.log(msg);

/**
 * Basic Promise Creation
 */
const basicPromise = new Promise((resolve, reject) => {
  log("🔄 Basic Promise: Async operation starting...");
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      resolve("✅ Basic Promise: Operation completed successfully!");
    } else {
      reject(new Error("❌ Basic Promise: Operation failed randomly!"));
    }
  }, 1000);
});

/**
 * Promise Chain with Multiple Operations
 */
const promiseChain = basicPromise
  .then((result) => {
    log(result);
    return "Step 2: Processing result...";
  })
  .then((step2Result) => {
    log(step2Result);
    return new Promise((resolve) => {
      setTimeout(() => resolve("Step 3: Final processing complete!"), 500);
    });
  })
  .then((finalResult) => {
    log(finalResult);
    return "🎉 All operations completed successfully!";
  })
  .catch((error) => {
    console.error("🔴 Error in promise chain:", error.message);
    return "Recovered from error";
  });

/**
 * Promise Utility Methods: Promise.all & Promise.race
 */
const urls = ["/api/user", "/api/posts", "/api/settings"];
const mockApiCalls = urls.map(
  (url, index) =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(`Fetched ${url} (Request ${index + 1})`),
        1000 + index * 500
      )
    )
);

// Promise.all - wait for all promises to resolve
Promise.all(mockApiCalls)
  .then((results) => {
    log("\n📦 Promise.all Results:");
    results.forEach((result) => log("  " + result));
  })
  .catch((err) => {
    console.error("❗ Promise.all Error:", err.message);
  });

// Promise.race - get the first resolved promise
Promise.race(mockApiCalls)
  .then((firstResult) => {
    log("\n🏁 Promise.race First Result: " + firstResult);
  })
  .catch((err) => {
    console.error("❗ Promise.race Error:", err.message);
  });

// Execute the main promise chain
promiseChain.then((finalMessage) => {
  log("\n📝 Final Summary: " + finalMessage);
});

/**
 * Modern: Async/Await Example
 */
async function runAsyncExample() {
  try {
    log("\n🚀 Async/Await Example:");
    const result = await basicPromise;
    log("  " + result);
  } catch (err) {
    console.error("  Async/Await Error:", err.message);
  }
}
runAsyncExample();

module.exports = {
  basicPromise,
  promiseChain,
  mockApiCalls,
};
