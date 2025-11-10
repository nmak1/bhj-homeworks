document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');

        // Обработчик для кнопки
        dropdownValue.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownList.classList.toggle('dropdown__list_active');
        });

        // Делегирование события для пунктов меню
        dropdownList.addEventListener('click', function(event) {
            event.preventDefault();

            const clickedItem = event.target.closest('.dropdown__item');
            if (clickedItem) {
                const link = clickedItem.querySelector('.dropdown__link');
                const newValue = link.textContent.trim();

                dropdownValue.textContent = newValue;
                dropdownList.classList.remove('dropdown__list_active');
            }
        });
    });

    // Глобальные обработчики для закрытия
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});