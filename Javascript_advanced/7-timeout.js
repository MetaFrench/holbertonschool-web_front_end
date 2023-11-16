console.log("Start of the execution queue");

function printNumbers() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

setTimeout(() => {
    printNumbers();
    console.log("Final code block to be executed");
}, 0);

console.log("End of loop printing");

