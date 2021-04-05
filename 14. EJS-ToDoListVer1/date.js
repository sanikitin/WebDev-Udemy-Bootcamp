module.exports.getDate = getDate;

function getDate() {
    let today = new Date();
    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }

    let date = today.toLocaleDateString('en-US', options); // Форматирование даты

    return date;
}

module.exports.getDay = getDay;

function getDay() {
    let today = new Date();
    let options = {
        weekday: 'long'
    }

    let day = today.toLocaleDateString('en-US', options); // Форматирование даты

    return day;
}

