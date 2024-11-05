// Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/fs.txt", "Hello World secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
fs.writeFile("data/fs.txt", "Hello World secara asynchronous!", (e) => {
  console.log(e);
});
