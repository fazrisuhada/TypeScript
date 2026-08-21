/**
 * Buat sebuah interface bernama Patient untuk merepresentasikan data pasien di sistem EMR, dengan ketentuan:
 * - id: number
 * - name: string
 * - age: number
 * - bloodType: string, tapi nilainya hanya boleh salah satu dari "A", "B", "AB", atau "O"
 * - isEmergency: boolean
 * 
 * Lalu buat sebuah function bernama admitPatient yang menerima satu parameter bertipe Patient, 
 * dan mengembalikan (return) sebuah string dengan format:
 * "Pasien {name} (usia {age}) telah didaftarkan. Status: {EMERGENCY / REGULAR}"
 * 
 * Ketentuan status:
 * - Jika isEmergency bernilai true, tampilkan EMERGENCY.
 * - Jika false, tampilkan REGULAR.
 */


interface Patient {
    id: number,
    name: string,
    age: number,
    bloodType: "A" | "B" | "AB" | "O",
    isEmergency: boolean
}

function admitPatient(data: Patient): string {
    // if(data.isEmergency === true) {
    //     return(`Pasien ${data.name} (usia ${data.age}) telah didaftarkan. Status: EMERGENCY`)
    // } else {
    //     return(` Pasien ${data.name} (usia ${data.age}) telah didaftarkan. Status: REGULAR`)
    // }
    const status = data.isEmergency ? "EMERGENCY" : "REGULER"
    return `Pasien ${data.name} (usia ${data.age}) telah didaftarkan. Status: ${status}`
}

const emr = admitPatient({
    id:1,
    name: "Joy",
    age: 20,
    bloodType: "A",
    isEmergency: false
})

console.log(emr)