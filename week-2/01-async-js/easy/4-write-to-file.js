let fs = require("fs");

fs.writeFile("4-a.txt", "Hello Node.js", (err) => {
  if (err) throw err;

  console.log("The file has been saved!");
});
