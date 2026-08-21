/**
 * Buat sebuah function generic bernama getLastItem yang:
 * - Menerima satu parameter: array dengan tipe bebas (pakai generic T)
 * - Mengembalikan elemen terakhir dari array tersebut
 * 
 * Contoh pemakaian:
 * console.log(getLastItem([10, 20, 30]));           // 30
 * console.log(getLastItem(["x", "y", "z"]));        // "z"
 */

const getFirstItem =<T,> (data: T[]): T  => {
    const summaries = data[0]
    return summaries
}

console.log(getFirstItem([1, 2, 3]));  

const getLastItem = <T,> (data: T[]): T => {
    const summaries = data[data.length-1]
    return summaries
}

console.log(getLastItem([1, 2, 3]));  