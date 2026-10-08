const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk memilih barang menggunakan switch case
function pilihBarang(pilihan) {
    switch (pilihan) {
        case 1:
            return { nama: "Buku", harga: 15000 };
        case 2:
            return { nama: "Pulpen", harga: 5000 };
        case 3:
            return { nama: "Tas", harga: 100000 };
        case 4:
            return { nama: "Sepatu", harga: 250000 };
        case 5:
            return { nama: "Jaket", harga: 150000 };
        default:
            return null;
    }
}

console.log("===== PROGRAM HITUNG DISKON =====");
console.log("Daftar Barang:");
console.log("1. Buku   - Rp15.000");
console.log("2. Pulpen - Rp5.000");
console.log("3. Tas    - Rp100.000");
console.log("4. Sepatu - Rp250.000");
console.log("5. Jaket  - Rp150.000");

rl.question("\nMasukkan pilihan barang pertama (1-5): ", (input1) => {
    rl.question("Masukkan jumlah barang pertama: ", (jumlah1) => {

        rl.question("\nMasukkan pilihan barang kedua (1-5): ", (input2) => {
            rl.question("Masukkan jumlah barang kedua: ", (jumlah2) => {

                rl.question("\nMasukkan pilihan barang ketiga (1-5): ", (input3) => {
                    rl.question("Masukkan jumlah barang ketiga: ", (jumlah3) => {

                        const barang1 = pilihBarang(parseInt(input1));
                        const barang2 = pilihBarang(parseInt(input2));
                        const barang3 = pilihBarang(parseInt(input3));

                        if (barang1 === null || barang2 === null || barang3 === null) {
                            console.log("\nPilihan barang tidak valid!");
                            rl.close();
                            return;
                        }

                        // Menghitung total belanja
                        const total1 = barang1.harga * parseInt(jumlah1);
                        const total2 = barang2.harga * parseInt(jumlah2);
                        const total3 = barang3.harga * parseInt(jumlah3);

                        const totalBelanja = total1 + total2 + total3;

                        // Menghitung diskon
                        let totalDiskon = 0;
                        let persenDiskon = 0;

                        if (totalBelanja >= 300000) {
                            persenDiskon = 10;
                            totalDiskon = totalBelanja * 10 / 100;
                        } else if (totalBelanja >= 100000) {
                            persenDiskon = 5;
                            totalDiskon = totalBelanja * 5 / 100;
                        } else if (totalBelanja >= 50000) {
                            persenDiskon = 3;
                            totalDiskon = totalBelanja * 3 / 100;
                        }

                        // Menghitung total bayar
                        const totalBayar = totalBelanja - totalDiskon;

                        console.log("\n===== HASIL PEMBELIAN =====");
                        console.log(`${barang1.nama} x ${jumlah1} = Rp${total1.toLocaleString("id-ID")}`);
                        console.log(`${barang2.nama} x ${jumlah2} = Rp${total2.toLocaleString("id-ID")}`);
                        console.log(`${barang3.nama} x ${jumlah3} = Rp${total3.toLocaleString("id-ID")}`);

                        if (totalDiskon > 0) {
                            console.log(`Total Belanja : Rp${totalBelanja.toLocaleString("id-ID")}`);
                            console.log(`Diskon ${persenDiskon}%      : Rp${totalDiskon.toLocaleString("id-ID")}`);
                            console.log(`Total Bayar   : Rp${totalBayar.toLocaleString("id-ID")}`);
                        } else {
                            console.log(`Total Belanja : Rp${totalBelanja.toLocaleString("id-ID")}`);
                            console.log("Anda tidak mendapat diskon karena tidak mencapai minimum perbelanjaan.");
                            console.log(`Total Bayar   : Rp${totalBayar.toLocaleString("id-ID")}`);
                        }

                        rl.close();
                    });
                });
            });
        });
    });
});