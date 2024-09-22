document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    // Собираем данные из формы
    const carMake = document.getElementById('carMake').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const carCondition = document.getElementById('carCondition').value;
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;

    // Отправляем данные по электронной почте
    const emailBody = `
        Markė: ${carMake}%0D%0A
        Modelis: ${carModel}%0D%0A
        Metai: ${carYear}%0D%0A
        Būklė: ${carCondition}%0D%0A
        Vardas: ${contactName}%0D%0A
        El. paštas: ${contactEmail}
    `;

    window.location.href = `mailto:uabantratu@gmail.com?subject=Automobilio Vertinimas&body=${emailBody}`;

    // Показываем сообщение об успешной отправке
    document.getElementById('carForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
});