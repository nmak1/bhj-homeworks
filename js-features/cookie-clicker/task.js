// Получаем элементы DOM
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

// Создаем элемент для отображения скорости
const clickerSpeed = document.createElement('div');
clickerSpeed.id = 'clicker__speed';
clickerSpeed.textContent = '0';
clickerCounter.after(clickerSpeed);

// Переменные состояния
let isCookieEnlarged = false;
let lastClickTime = null;

// Функция расчета скорости кликов
function calculateClickSpeed() {
    const currentTime = new Date();

    if (lastClickTime !== null) {
        const timeDifference = (currentTime - lastClickTime) / 1000; // в секундах
        const clicksPerSecond = (1 / timeDifference).toFixed(2);
        clickerSpeed.textContent = clicksPerSecond;
    }

    lastClickTime = currentTime;
}

// Обработчик клика по печеньке
cookie.addEventListener('click', function() {
    // Обновляем счетчик кликов
    const currentClicks = parseInt(clickerCounter.textContent);
    clickerCounter.textContent = currentClicks + 1;

    // Рассчитываем и отображаем скорость
    calculateClickSpeed();

    // Анимируем изменение размера печеньки
    if (isCookieEnlarged) {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
    } else {
        cookie.style.width = '250px';
        cookie.style.height = '250px';
    }

    isCookieEnlarged = !isCookieEnlarged;
});