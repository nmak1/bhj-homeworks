document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(container => {
        container.addEventListener('click', function(event) {
            // Проверяем, что клик был по вкладке
            if (event.target.classList.contains('tab')) {
                const clickedTab = event.target;
                const allTabs = Array.from(container.querySelectorAll('.tab'));
                const allContents = Array.from(container.querySelectorAll('.tab__content'));

                // Находим индекс кликнутой вкладки
                const tabIndex = allTabs.indexOf(clickedTab);

                // Снимаем активные состояния
                allTabs.forEach(tab => tab.classList.remove('tab_active'));
                allContents.forEach(content => content.classList.remove('tab__content_active'));

                // Устанавливаем новые активные состояния
                clickedTab.classList.add('tab_active');
                allContents[tabIndex].classList.add('tab__content_active');
            }
        });
    });
});