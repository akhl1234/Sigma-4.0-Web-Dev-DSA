function riskyPromise(shouldFail = false) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject(new Error("Something went wrong!"));
    } else {
      resolve("Success!");
    }
  });
}

// Example usege:
riskyPromise(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
  });
