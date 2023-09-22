const calendarContainer = document.querySelector(".calendar-container");
const calendarMonthYear = document.querySelector("#calendar-month-year");
const calendarTable = document.querySelector("#calendar-table");
const calendarBody = document.querySelector("#calendar-body");
const prevMonthButton = document.querySelector("#prev-month");
const nextMonthButton = document.querySelector("#next-month");
// Fungsi untuk membuat kalender
function createCalendar(year, month) {
    // Implementasi pembuatan kalender di sini
}
// Event listener untuk tombol Check In
checkInButton.addEventListener("click", function () {
    calendarContainer.style.display = "block";
    // Tampilkan kalender Check In dan sembunyikan kalender Check Out jika diperlukan
});
// Event listener untuk tombol Check Out
checkOutButton.addEventListener("click", function () {
    calendarContainer.style.display = "block";
    // Tampilkan kalender Check Out dan sembunyikan kalender Check In jika diperlukan
});
// Event listener untuk tombol Previous Month
prevMonthButton.addEventListener("click", function () {
    // Implementasikan perpindahan ke bulan sebelumnya di sini
});
// Event listener untuk tombol Next Month
nextMonthButton.addEventListener("click", function () {
    // Implementasikan perpindahan ke bulan berikutnya di sini
});
// Inisialisasi kalender saat halaman dimuat
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
createCalendar(currentYear, currentMonth);
