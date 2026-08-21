/**
 * Soal 2b (masih konsep .filter() + array of objects, studi kasus berbeda)
 * 
 * Buat interface bernama Medicine untuk data obat di apotek rumah sakit, dengan ketentuan:
 * - name: string
 * - stock: number
 * - price: number
 * - isControlled: boolean (apakah obat ini termasuk obat keras/terkontrol)
 * - expiryNote: string, opsional
 * 
 * Lalu buat function bernama countLowStockMedicine yang menerima parameter berupa array of Medicine, 
 * dan mengembalikan string dengan format:
 * "Ada {jumlah} obat dengan stok di bawah 10 dari total {total} jenis obat."
 * 
 * Ketentuan: "stok di bawah 10" artinya stock < 10.
 */

interface Medicine {
    name: string,
    stock: number,
    price: number,
    isControlled: boolean,
    expiryNote?: string
}

const contohObat: Medicine[] = [
    { name: "Paracetamol 500mg", stock: 150, price: 2000, isControlled: false },
    { name: "Amoxicillin 500mg", stock: 8, price: 3500, isControlled: false },
    { name: "Tramadol 50mg", stock: 5, price: 4500, isControlled: true, expiryNote: "Exp 3 bulan lagi" },
    { name: "Diazepam 5mg", stock: 12, price: 6000, isControlled: true },
    { name: "Ibuprofen 400mg", stock: 200, price: 2500, isControlled: false },
    { name: "Omeprazole 20mg", stock: 3, price: 5000, isControlled: false, expiryNote: "Stok menipis, perlu restock" },
    { name: "Ceftriaxone Inj", stock: 25, price: 15000, isControlled: false },
    { name: "Morphine 10mg", stock: 2, price: 12000, isControlled: true, expiryNote: "Perlu pengawasan ketat" },
    { name: "Metformin 500mg", stock: 180, price: 1500, isControlled: false },
    { name: "Insulin Glargine", stock: 6, price: 85000, isControlled: false },
    { name: "Amlodipine 10mg", stock: 90, price: 2200, isControlled: false },
    { name: "Codeine 10mg", stock: 9, price: 5500, isControlled: true },
    { name: "Cefixime 100mg", stock: 60, price: 4000, isControlled: false },
    { name: "Alprazolam 0.5mg", stock: 4, price: 7000, isControlled: true, expiryNote: "Stok kritis" },
    { name: "Simvastatin 20mg", stock: 130, price: 1800, isControlled: false },
    { name: "Fentanyl Patch", stock: 1, price: 25000, isControlled: true, expiryNote: "Segera restock" },
    { name: "Cetirizine 10mg", stock: 300, price: 1000, isControlled: false },
    { name: "Ranitidine 150mg", stock: 7, price: 2000, isControlled: false },
    { name: "Loperamide 2mg", stock: 45, price: 1200, isControlled: false },
    { name: "Salbutamol Inhaler", stock: 15, price: 35000, isControlled: false },
];

const countLowStockMedicine = (data: Medicine[]): string => {
    const total = data.length;
    const stock = data.filter((item) => item.stock < 10).length;

    return `Ada ${stock} obat dengan stok di bawah 10 dari total ${total} jenis obat.`
}


console.log(countLowStockMedicine(contohObat))