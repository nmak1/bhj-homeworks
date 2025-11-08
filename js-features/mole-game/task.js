// Получаем элементы
const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

// Счетчики
let dead = 0;
let lost = 0;

// Функция для случайного появления крота
function showRandomMole() {
    // Сначала убираем всех кротов
    holes.forEach(hole => {
        hole.classList.remove('hole_has-mole');
    });

    // Выбираем случайную лунку
    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add('hole_has-mole');
}

// Функция проверки состояния игры
function checkGameStatus() {
    if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        return;
    }
    if (lost >= 5) {
        alert('Поражение! Слишком много промахов!');
        resetGame();
        return;
    }
}

// Функция сброса игры
function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}

// Добавляем обработчики для лунок
holes.forEach(hole => {
    hole.addEventListener('click', function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
            this.classList.remove('hole_has-mole');
        } else {
            lost++;
            lostCounter.textContent = lost;
        }
        checkGameStatus();
    });
});

// Запускаем появление кротов каждую секунду
setInterval(showRandomMole, 1000);