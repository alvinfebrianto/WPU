//const fs = require('fs'); // core module
// const cetakNama = require("./script"); // local module
// const moment = require("moment"); // third party module / npm module / node_modules

const script = require("./script");
console.log(
  script.cetakNama("Alvin"),
  `umur ${script.umur}`,
  script.mahasiswa.cetakMhs(),
  new script.Orang()
);
