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
// fs.writeFile("data/fs.txt", "Hello World secara asynchronous!", (e) => {
//   console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync("data/fs.txt", "utf-8");
// console.log(data);
// console.log(data.toString());

// membaca isi file (asynchronous)
// fs.readFile("data/fs.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readline [membaca apa yang ditulis di terminal]
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan no HP Anda: ", (noHP) => {
    console.log(`Terima kasih ${nama}, sudah menginputkan ${noHP}`);
    rl.close();
  });
});
