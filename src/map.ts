/**
 * Buat interface bernama Appointment untuk jadwal kunjungan pasien:
 * - patientName: string
 * - doctorName: string
 * - date: string (format bebas, misal "2026-08-25")
 * - isConfirmed: boolean
 * 
 * Lalu buat function bernama getAppointmentSummaries yang menerima parameter array of Appointment, 
 * dan mengembalikan array of string (bukan satu string), di mana setiap elemennya berformat:
 * "{patientName} - dr. {doctorName} ({date}) [{CONFIRMED / PENDING}]"
 * 
 * Ketentuan:
 * - Status di dalam kurung siku menampilkan CONFIRMED jika isConfirmed true, atau PENDING jika false.
 */

interface Appointment {
    patientName: string,
    doctorName: string,
    date: string, 
    isConfirmed: boolean
}

const contohJanji: Appointment[] = [
    { patientName: "Siti Aminah", doctorName: "Budi Santoso", date: "2026-08-22", isConfirmed: true },
    { patientName: "Rudi Hartono", doctorName: "Dewi Lestari", date: "2026-08-22", isConfirmed: false },
    { patientName: "Ani Wijaya", doctorName: "Budi Santoso", date: "2026-08-23", isConfirmed: true },
    { patientName: "Joko Susilo", doctorName: "Rina Kartika", date: "2026-08-23", isConfirmed: false },
    { patientName: "Maya Sari", doctorName: "Dewi Lestari", date: "2026-08-24", isConfirmed: true },
    { patientName: "Agus Salim", doctorName: "Rina Kartika", date: "2026-08-24", isConfirmed: false },
    { patientName: "Rina Marlina", doctorName: "Budi Santoso", date: "2026-08-25", isConfirmed: true },
    { patientName: "Hendra Gunawan", doctorName: "Dewi Lestari", date: "2026-08-25", isConfirmed: true },
    { patientName: "Wati Suryani", doctorName: "Rina Kartika", date: "2026-08-26", isConfirmed: false },
    { patientName: "Fajar Nugroho", doctorName: "Budi Santoso", date: "2026-08-26", isConfirmed: true },
];

const getAppointmentSummaries = (data: Appointment[]): string[] => {
    const summaries = data.map((item) => {
        const status = item.isConfirmed ? "CONFIRMED" : "PENDING"
        return `${item.patientName} - dr. ${item.doctorName} (${item.date}) (${status})`
    })

    return summaries

}

console.log(getAppointmentSummaries(contohJanji))