function cetakNama(nama) {
  return `Halo nama saya ${nama}`;
}

let umur = 22;

const mahasiswa = {
  nama: "Alvin Febrianto",
  umur: 22,
  cetakMhs() {
    return `Halo nama saya ${this.nama} dan saya umur ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.umur = umur;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   umur: umur,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, umur, mahasiswa, Orang }; // ES6
