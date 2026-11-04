/* ==========================================================
   Beauty Home — Интерактивные функции JS
   ========================================================== */

// 1. Переключение мобильного меню
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// 2. Открытие модального окна записи
function openBookingModal(serviceName = '') {
    const modal = document.getElementById('booking-modal');
    const serviceSelect = document.getElementById('modal-service');
    
    if (serviceSelect && serviceName) {
        // Устанавливаем выбранную услугу
        for (let option of serviceSelect.options) {
            if (option.value.toLowerCase().includes(serviceName.toLowerCase())) {
                option.selected = true;
                break;
            }
        }
    }
    
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// 3. Закрытие модального окна записи
function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 4. Фильтрация услуг по категориям
function filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    const buttons = document.querySelectorAll('.tab-btn');

    // Обновляем активность кнопок
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Подсвечиваем нажатую кнопку
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Показы/скрываем карточки
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden-card');
        } else {
            card.classList.add('hidden-card');
        }
    });
}

// 5. Отправка формы напрямую в WhatsApp
function handleModalSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('modal-name').value;
    const phone = document.getElementById('modal-phone').value;
    const service = document.getElementById('modal-service').value;
    
    const phoneNumber = "77763039000"; // Номер салона
    
    const message = `Здравствуйте! Хочу записаться в салон Beauty Home.\n\n` +
                    `👤 Имя: ${name}\n` +
                    `📞 Телефон: ${phone}\n` +
                    `💅 Услуга: ${service}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
}

// Закрытие модалки при клике вне её области
window.onclick = function(event) {
    const modal = document.getElementById('booking-modal');
    if (event.target === modal) {
        closeBookingModal();
    }
};
