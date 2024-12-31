const yargs = require("yargs");

// yargs.command(
//   'add',
//   'Menambahkan contact baru',
//   () => {},
//   (argv) => {console.log(argv.nama);}
// );

yargs.command({
  command: 'add',
  describe: 'Menambahkan cntact baru',
  builder: {
    nama: {
      describe: 'Nama Lengkap',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor Handphone',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    const contact = {
      nama: argv.nama,
      email: argv.email,
      noHP: argv.nohp,
    };
    console.log(contact)
  },
});

yargs.parse();