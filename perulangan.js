const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kata/kalimat: ", (kata) => {
    let hasil = "";

    for (let i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i];
    }

    console.log("Hasil dibalik:", hasil);

    rl.close();
});