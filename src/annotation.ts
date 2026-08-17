export function annotations() {
    // Mendeklarasikan variabel dengan tipe data string
    let nama: string;
    nama = "Mawar";
    console.log(nama);

    // Mendeklarasikan fungsi dengan parameter dan nilai kembalian bertipe number
    function tambah(a: number, b: number): number {
        return a + b;
    }
    console.log(tambah(1, 2));

    // Mendeklarasikan objek dengan properti bertipe string dan number
    let mobil: { merk: string, tahun: number };
    mobil = {
        merk: "Toyota",
        tahun: 2022
    };
    console.log(mobil);
}