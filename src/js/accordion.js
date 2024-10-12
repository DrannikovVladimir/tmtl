document.querySelectorAll('.accordion-list__header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Если текущий аккордеон уже открыт, закрываем его
        if (!content.classList.contains('visually-hidden')) {
            button.classList.remove('active');
            content.style.maxHeight = null;
            setTimeout(() => {
                content.classList.add('visually-hidden');
            }, 300); // Задержка должна соответствовать времени transition в CSS
            return;
        }
        
        // Закрываем все другие открытые аккордеоны
        document.querySelectorAll('.accordion-list__content').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active');
                setTimeout(() => {
                    item.classList.add('visually-hidden');
                }, 300);
            }
        });

        // Открываем текущий аккордеон
        button.classList.add('active');
        content.classList.remove('visually-hidden');
        content.style.maxHeight = content.scrollHeight + "px";
    });
});