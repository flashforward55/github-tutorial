let country = prompt('Укажите страну, пожалуйста');
let message;
switch (country.toLowerCase()) {
    case 'китай':
        message = 'Доставка в Китай будет стоить 100 кредитов';
        break;
    case 'чили':
        message = 'Доставка в Чили будет стоить 250 кредитов';
        break;
    case 'австралия':
        message = 'Доставка в Австралию будет стоить 170 кредитов';
        break;
    case 'индия':
        message = 'Доставка в Индию будет стоить 80 кредитов';
        break;
    case 'ямайка':
        message = 'Доставка в Ямайку будет стоить 120 кредитов';
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
alert(message);

//____2 способ_______

let region = prompt('Укажите страну, пожалуйста');
let report;
let price;
switch (region.toLowerCase()) {
    case 'китай':
        price = 100;
        report = `Доставка в Китай будет стоить ${price} кредитов`;
        break;
    case 'чили':
        price = 250;
        report = `Доставка в Чили будет стоить ${price} кредитов`;
        break;
    case 'австралия':
        price = 170;
        report = `Доставка в Австралию будет стоить ${price} кредитов`;
        break;
    case 'индия':
        price = 80;
        report = `Доставка в Индию будет стоить ${price} кредитов`;
        break;
    case 'ямайка':
        price = 120;
        report = `Доставка в Ямайку будет стоить ${price} кредитов`;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
alert(report);
