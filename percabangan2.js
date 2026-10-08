const rl = require("readline");
const input = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== HITUNG KALORI OLAHRAGA ===");
console.log("1. Lari = 60 kalori / 5 menit");
console.log("2. Push-up = 200 kalori / 30 menit");
console.log("3. Plank = 5 kalori / 1 menit");

input.question("Pilih olahraga 1: ", (olahraga1) => {
    input.question("Waktu (menit): ", (waktu1) => {
        input.question("Pilih olahraga 2: ", (olahraga2) => {
            input.question("Waktu (menit): ", (waktu2) => {
                input.question("Pilih olahraga 3: ", (olahraga3) => {
                    input.question("Waktu (menit): ", (waktu3) => {

                        function hitung(olahraga, waktu) {
                            switch (olahraga.toLowerCase()) {
                                case "lari":
                                    return waktu / 5 * 60;
                                case "push-up":
                                    return waktu / 30 * 200;
                                case "plank":
                                    return waktu * 5;
                                default:
                                    return 0;
                            }
                        }

                        let total = hitung(olahraga1, +waktu1) +
                                    hitung(olahraga2, +waktu2) +
                                    hitung(olahraga3, +waktu3);

                        console.log("\nTotal kalori yang terbakar:", total, "kalori");

                        input.close();
                    });
                });
            });
        });
    });
});