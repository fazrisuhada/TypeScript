/**
 * Soal 2 (Optional Properties & Array of Objects)
 * 
 * Buat interface bernama LabResult untuk merepresentasikan hasil pemeriksaan lab pasien, dengan ketentuan:
 * - testName: string
 * - result: number
 * - unit: string
 * - isAbnormal: boolean
 * - note: string, tapi properti ini opsional (tidak semua hasil lab punya catatan)
 * 
 * Lalu buat function bernama summarizeLabResults yang menerima satu parameter berupa array of LabResult, 
 * dan mengembalikan sebuah string yang berisi jumlah total hasil lab yang isAbnormal-nya true, dengan format:
 * "Ditemukan {jumlah} hasil lab abnormal dari total {total} pemeriksaan."
 * 
 * Contoh: jika ada 5 data lab dan 2 di antaranya isAbnormal: true, maka outputnya:
 * "Ditemukan 2 hasil lab abnormal dari total 5 pemeriksaan."
 */


interface LabResult {
    testName: string,
    result: number,
    unit: string,
    isAbnormal: boolean,
    note?: string
}

const summarizeLabResults = (data: LabResult[]): string => {
    const jumlah = data.length
    const abnormalOnly = data.filter((item) => item.isAbnormal)
    const totalAbnormalOnly = abnormalOnly.length

    return `Ditemukan ${totalAbnormalOnly} hasil lab abnormal dari total ${jumlah} pemeriksaan.`
}

const contohData: LabResult[] = [
    { testName: "Gula Darah Puasa", result: 200, unit: "mg/dL", isAbnormal: true },
    { testName: "Kolesterol Total", result: 150, unit: "mg/dL", isAbnormal: false },
    { testName: "Hemoglobin", result: 9, unit: "g/dL", isAbnormal: true },
    { testName: "Trombosit", result: 250, unit: "10^3/uL", isAbnormal: false },
    { testName: "Leukosit", result: 15000, unit: "/uL", isAbnormal: true, note: "Kemungkinan infeksi" },
    { testName: "Kreatinin", result: 0.9, unit: "mg/dL", isAbnormal: false },
    { testName: "Ureum", result: 55, unit: "mg/dL", isAbnormal: true },
    { testName: "SGOT", result: 30, unit: "U/L", isAbnormal: false },
    { testName: "SGPT", result: 28, unit: "U/L", isAbnormal: false },
    { testName: "Asam Urat", result: 8.5, unit: "mg/dL", isAbnormal: true, note: "Perlu diet rendah purin" },
    { testName: "Trigliserida", result: 120, unit: "mg/dL", isAbnormal: false },
    { testName: "HDL", result: 45, unit: "mg/dL", isAbnormal: false },
    { testName: "LDL", result: 170, unit: "mg/dL", isAbnormal: true },
    { testName: "Natrium", result: 140, unit: "mmol/L", isAbnormal: false },
    { testName: "Kalium", result: 6.2, unit: "mmol/L", isAbnormal: true, note: "Perlu pemantauan jantung" },
    { testName: "Kalsium", result: 9.5, unit: "mg/dL", isAbnormal: false },
    { testName: "Hematokrit", result: 30, unit: "%", isAbnormal: true },
    { testName: "Eritrosit", result: 5.0, unit: "10^6/uL", isAbnormal: false },
    { testName: "MCV", result: 88, unit: "fL", isAbnormal: false },
    { testName: "MCH", result: 29, unit: "pg", isAbnormal: false },
    { testName: "Bilirubin Total", result: 2.5, unit: "mg/dL", isAbnormal: true, note: "Cek fungsi hati lanjut" },
    { testName: "Protein Total", result: 7.0, unit: "g/dL", isAbnormal: false },
    { testName: "Albumin", result: 3.0, unit: "g/dL", isAbnormal: true },
    { testName: "Globulin", result: 3.2, unit: "g/dL", isAbnormal: false },
    { testName: "HbA1c", result: 8.2, unit: "%", isAbnormal: true, note: "Kontrol gula darah kurang baik" },
    { testName: "TSH", result: 2.5, unit: "uIU/mL", isAbnormal: false },
    { testName: "T3", result: 1.2, unit: "ng/mL", isAbnormal: false },
    { testName: "T4", result: 12, unit: "ug/dL", isAbnormal: true },
    { testName: "CRP", result: 15, unit: "mg/L", isAbnormal: true, note: "Indikasi inflamasi" },
    { testName: "D-Dimer", result: 0.3, unit: "ug/mL", isAbnormal: false },
    { testName: "Feritin", result: 400, unit: "ng/mL", isAbnormal: true },
    { testName: "Vitamin D", result: 25, unit: "ng/mL", isAbnormal: false },
];

console.log(
    summarizeLabResults(contohData)
)
 