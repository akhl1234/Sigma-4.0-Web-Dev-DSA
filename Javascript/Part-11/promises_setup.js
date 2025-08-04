function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

getData().then((res) => {
    console.log(res);
});
