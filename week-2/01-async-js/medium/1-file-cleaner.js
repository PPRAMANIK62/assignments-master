const fs = require("fs");

fs.readFile("1-a.txt", "utf-8", function (err, data) {
  if (err) console.log(err);
  let str = data.replace(/\s+/g, " ");

  fs.writeFile("1-a.txt", str, function (err) {
    if (err) console.log(err);
    else console.log("File written successfully");
  });
});
