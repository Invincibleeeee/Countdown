document.addEventListener("DOMContentLoaded", function () {
    const countdownElem = document.getElementById('countdown');
    const calendarElem = document.getElementById('calendar');
    const dayDisplayElem = document.getElementById('day-display');

    // Countdown Timer (Midnight)
    function updateCountdown() {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0); // Midnight tonight

        const remainingTime = midnight - now;

        const hours = String(Math.floor(remainingTime / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((remainingTime % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((remainingTime % 60000) / 1000)).padStart(2, '0');

        countdownElem.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Display Current Day
    function updateDayDisplay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        dayDisplayElem.textContent = `${daysOfWeek[today.getDay()]}`;
    }

    // Calendar Setup
    function generateCalendar() {
        const today = new Date();
        const currentDate = today.getDate();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        // First day of the month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Generate the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElem = document.createElement('div');
            dayElem.className = 'day';
            dayElem.textContent = i;

            // Cross-out past days
            if (i < currentDate) {
                dayElem.classList.add('crossed');
            }
            calendarElem.appendChild(dayElem);
        }
    }

    setInterval(updateCountdown, 1000);
    updateDayDisplay();
    generateCalendar();
});


function setMotivationalQuote() {
    const quoteElem = document.getElementById('motivational-quote');
    const quote = "\"Your future depends on what you do today. Don't waste a second\"";
    quoteElem.textContent = quote;
}

setMotivationalQuote();
