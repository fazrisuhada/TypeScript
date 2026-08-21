/**
 * SOAL: (Menengah — Union Types & Type Narrowing)
 * 
 * Konsep baru: Union Types (|) dan type narrowing.
 * 
 * Buat sebuah function bernama formatId yang:
 * 1. Menerima satu parameter bernama id, yang tipenya bisa number ATAU string (union type).
 * 2. Mengembalikan string dengan aturan:
 *    - Kalau id bertipe number, ubah jadi string dengan format: "ID-{angka}" (contoh: 123 → "ID-123")
 *    - Kalau id bertipe string, langsung kembalikan id tersebut dalam huruf besar semua (uppercase)
 */

// Tulis kode fungsi formatId Anda di bawah ini:

const formatId = (id: number | string) => {
    if(typeof id === "number") {
        return `ID-${id}`
    } else {
        return id.toUpperCase();
    }
}

console.log(formatId(123));       // "ID-123"
console.log(formatId("abc123"));  // "ABC123"