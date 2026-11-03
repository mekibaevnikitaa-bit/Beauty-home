document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('appointment-form');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Укажите рабочий номер телефона салона (без знака +)
        const salonPhoneNumber = "77763039000"; 

        // Сбор данных из формы
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        // Формирование сообщения для WhatsApp
        const message = `Здравствуйте! Я хочу записаться в салон Beauty Home (Экибастуз).\n\n` +
                        `👤 *Имя:* ${name}\n` +
                        `📞 *Телефон:* ${phone}\n` +
                        `💅 *Услуга:* ${service}\n` +
                        `📅 *Желаемая дата:* ${date}`;

        // Кодирование сообщения для URL
        const encodedMessage = encodeURIComponent(message);

        // Ссылка на WhatsApp API
        const whatsappUrl = `https://wa.me/${salonPhoneNumber}?text=${encodedMessage}`;

        // Перенаправление клиента
        window.open(whatsappUrl, '_blank');
    });
});
