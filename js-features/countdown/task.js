// Получаем элемент таймера
const timerElement = document.getElementById('timer');

// Функция для преобразования времени hh:mm:ss в секунды
function timeToSeconds(timeString) {
    const parts = timeString.split(':');
    let seconds = 0;

    if (parts.length === 3) {
        // Формат hh:mm:ss
        seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    } else if (parts.length === 2) {
        // Формат mm:ss
        seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    } else {
        // Просто секунды
        seconds = parseInt(timeString);
    }

    return seconds;
}

// Функция для форматирования секунд в hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}

// Получаем начальное значение таймера и преобразуем в секунды
const initialTime = timerElement.textContent;
let timeLeft = timeToSeconds(initialTime);

// Функция для обновления таймера
function updateTimer() {
    // Уменьшаем время на 1 секунду
    timeLeft--;

    // Обновляем отображение таймера
    timerElement.textContent = formatTime(timeLeft);

    // Проверяем, закончилось ли время
    if (timeLeft <= 0) {
        // Останавливаем таймер
        clearInterval(timerInterval);
        // Показываем сообщение о победе
        alert('Вы победили в конкурсе!');
    }
}

// Запускаем таймер (обновляем каждую секунду)
console.log('Таймер запущен! Начальное время:', timeLeft, 'секунд');
const timerInterval = setInterval(updateTimer, 1000);