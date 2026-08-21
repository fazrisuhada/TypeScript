/**
 * Buat interface bernama Invoice untuk tagihan pasien:
 * - invoiceNumber: string
 * - patientName: string
 * - totalAmount: number
 * - isPaid: boolean
 * 
 * Lalu buat function bernama getInvoiceSummaries yang menerima parameter array of Invoice, 
 * dan mengembalikan array of string, dengan format setiap elemennya:
 * "[{invoiceNumber}] {patientName} - Rp{totalAmount} ({LUNAS / BELUM LUNAS})"
 * 
 * Ketentuan status pembayaran:
 * - Jika isPaid true → LUNAS
 * - Jika isPaid false → BELUM LUNAS
 */

interface Invoice {
    invoiceNumber: string,
    patientName: string,
    totalAmount: number,
    isPaid: boolean
}

const invoices: Invoice[] = [
    {invoiceNumber: "INV-01", patientName: "Desi", totalAmount: 500000, isPaid: true},
    {invoiceNumber: "INV-02", patientName: "Deni", totalAmount: 1000000, isPaid: true},
    {invoiceNumber: "INV-03", patientName: "Deri", totalAmount: 1500000, isPaid: false},
    {invoiceNumber: "INV-04", patientName: "Diki", totalAmount: 2500000, isPaid: true},
    {invoiceNumber: "INV-05", patientName: "Devi", totalAmount: 2000000, isPaid: false}
]

const getInvoiceSummaries = (data: Invoice[]): string[] => {
    const summaries = data.map(item => {
        const statusPaid = item.isPaid ? "LUNAS" : "BELUM LUNAS"
        return `[${item.invoiceNumber}] ${item.patientName} - Rp${item.totalAmount} (${statusPaid})`
    })

    return summaries
}

console.log(getInvoiceSummaries(invoices));