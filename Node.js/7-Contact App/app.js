const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cek apakah folder data ada, jika tidak maka buat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// cek apakah file contacts.json ada, jika tidak maka buat file contacts.json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan no HP Anda: ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terima kasih sudah memasukkan data");
    rl.close();
  });
});