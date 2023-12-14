let fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("Data from fs : ", data);
});

let a = 0;
for (let i = 0; i < 10000000; i++) {
  a++;
}

console.log("a : ", a);

// The fs.readFile is an async function.
// So it will not block the execution of the rest of the code.
// and will be on hold until the loop is completed.
