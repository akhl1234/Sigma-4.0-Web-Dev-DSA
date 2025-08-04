function getData(callback) {
  setTimeout(() => {
    const data = "Data fetched from server";
    console.log(data);
    callback(data);
  }, 2000);
}

console.log("Starting callback hell demo...");

getData((data) => {
  setTimeout(() => {
    console.log("Processing Data...");
    setTimeout(() => {
      console.log("Saving Data...");
      console.log("Callback hell demo completed.");
    }, 2000);
  }, 2000);
});
