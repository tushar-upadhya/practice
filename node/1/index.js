const fs = require("fs");

const https = require("http");

//====================================================-----> blocking, synchronous way
// const textIn = fs.readFileSync("./text/input.txt", "utf-8");
// console.log("textIn:", textIn);
// const textOut = `this is what we know about fs ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./text/output.txt", textOut);
// console.log("textOut:", textOut);

//-================================---> blocking, asynchronous way
// fs.readFile("./text/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./text/${data1}`, "utf-8", (err, data2) => {
//     console.log("data:", data2);
//   });
// });

// console.log("will read file!");

// ==========================================---->
const server = https.createServer((req, res) => {
  // console.log("req:", req);
  res.end("hello world");
});
// const PORT = 3000;
server.listen(3000, "127.0.0.1", (req, res) => {
  console.log("server:");
});
