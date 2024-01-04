const fs = require("fs");

//-----> blocking, synchronous way
const textIn = fs.readFileSync("./text/input.txt", "utf-8");
// console.log("textIn:", textIn);
const textOut = `this is what we know about fs ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./text/output.txt", textOut);
// console.log("textOut:", textOut);

//----> blocking, asynchronous way
fs.readFile("./text/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./text/${data1}`, "utf-8", (err, data2) => {
    console.log("data:", data2);
  });
});

console.log("will read file!");
