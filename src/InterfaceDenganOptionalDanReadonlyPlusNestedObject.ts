/**
 * Soal 6 (Menengah — Interface dengan Optional & Readonly, plus Nested Object)
 * 
 * 1. Buat interface bernama Doctor dengan struktur:
 *    - id: number, tidak boleh diubah setelah dibuat (readonly)
 *    - name: string
 *    - specialization: string
 *    - schedule: sebuah object (nested object) dengan properti:
 *      * days: array of string (contoh: ["Senin", "Rabu", "Jumat"])
 *      * startHour: number
 *      * endHour: number
 *    - contact: string, bersifat opsional (optional)
 * 
 * 2. Buat function bernama getDoctorSchedule yang:
 *    - Menerima satu parameter bertipe Doctor.
 *    - Mengembalikan string dengan format:
 *      "Dr. {name} ({specialization}) praktik pada {hari digabung dengan koma}, jam {startHour}:00 - {endHour}:00"
 * 
 * Contoh Hasil:
 * Jika days = ["Senin", "Rabu"], startHour = 8, endHour = 14, maka outputnya:
 * "Dr. Budi Santoso (Kardiologi) praktik pada Senin, Rabu, jam 8:00 - 14:00"
 * 
 * Clue:
 * Untuk menggabungkan array of string menjadi satu string dipisah koma, 
 * gunakan method `.join(", ")`. Contoh: ["Senin", "Rabu"].join(", ") -> "Senin, Rabu"
 */

// Tulis interface Doctor dan function getDoctorSchedule Anda di bawah ini:


interface Doctor {
    readonly id: number,
    name: string,
    specialization: string,
    schedule:{
        days: string[],
        startHour: number,
        endHour: number
    },
    contact?: string
}

const dokterContoh: Doctor = {
    id: 1,
    name: "Budi Santoso",
    specialization: "Kardiologi",
    schedule: {
        days: ["Senin", "Rabu", "Jumat"],
        startHour: 8,
        endHour: 14
    },
    contact: "081234567890"
};

const dokterContoh2: Doctor = {
    id: 2,
    name: "Dewi Lestari",
    specialization: "Anak",
    schedule: {
        days: ["Selasa", "Kamis"],
        startHour: 9,
        endHour: 16
    }
    // contact sengaja tidak diisi, karena opsional
};

const getDoctorSchedule = (data: Doctor):string => {
    return `Dr. ${data.name} (${data.specialization}) praktik pada ${data.schedule.days.join(", ")}, jam ${data.schedule.startHour}:00 - ${data.schedule.endHour}:00`
}

console.log(getDoctorSchedule(dokterContoh))
console.log(getDoctorSchedule(dokterContoh2))
