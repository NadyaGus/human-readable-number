module.exports = function toReadable (number) {
    stringFromNumber = number.toString(); // сделала строчку из числа "123"
    arrayFromString = stringFromNumber.split(''); // сделала массив ['1', '2', '3']
    let reverse = arrayFromString.reverse(); // сделала реверс прототипа ['3', '2', '1']
    let reverseString = reverse.toString(); //сделала обратно строку, получила реверс первой строки "1,2,3" >>> "3,2,1"

    let number1 = reverseString[0]; // задала номер числам из массива. это единицы
    let number2 = reverseString[2]; // это десятки
    let number3 = reverseString[4]; // это сотни
    let dozen = ''; //переменная для странных чисел 10-19
    

    switch (reverseString[2] + reverseString[0]) {
        case '19':
            dozen = ' nineteen';
            break;
        case '18':
            dozen = ' eighteen';
            break;
        case '17':
            dozen = ' seventeen';
            break;
        case '16':
            dozen = ' sixteen';
            break;
        case '15':
            dozen = ' fifteen';
            break;
        case '14':
            dozen = ' fourteen';
            break;
        case '13':
            dozen = ' thirteen';
            break;
        case '12':
            dozen = ' twelve';
            break;
        case '11':
            dozen = ' eleven';
            break;
        case '10':
            dozen = ' ten';
            break;
        default:
            dozen = '';   
    }

    

    switch (reverseString[4]) {   //это сотни
        case undefined:
            number3 = '';
            break;
        case '1':
            number3 = 'one hundred';
            break;
        case '2':
            number3 = 'two hundred';
            break;
        case '3':
            number3 = 'three hundred';
            break;
        case '4':
            number3 = 'four hundred';
            break;
        case '5':
            number3 = 'five hundred';
            break;
        case '6':
            number3 = 'six hundred';
            break;
        case '7':
            number3 = 'seven hundred';
            break;
        case '8':
            number3 = 'eight hundred';
            break;
        case '9':
            number3 = 'nine hundred';
    }

    switch (reverseString[2]) {  //это десятки
        case undefined:
            number2 = '';
            break;
        case '0':
             number2 = ''; 
             break;
        case '1':
            number2 = dozen; //посмотреть подробнгее
            break;
        case '2':
            number2 = ' twenty';
            break;
        case '3':
            number2 = ' thirty';
            break;
        case '4':
            number2 = ' forty';
            break;
        case '5':
            number2 = ' fifty';
            break;
        case '6':
            number2 = ' sixty';
            break;
        case '7':
            number2 = ' seventy';
            break;
        case '8':
            number2 = ' eighty';
            break;
        case '9':
            number2 = ' ninety';
    }

    switch (reverseString[0]) {  //это единицы
        case undefined:
            number1 = '';
            break;
         case '0':
             number1 = ''; 
             break;
        case '1':
            number1 = ' one'; 
            break;
        case '2':
            number1 = ' two';
            break;
        case '3':
            number1 = ' three';
            break;
        case '4':
            number1 = ' four';
            break;
        case '5':
            number1 = ' five';
            break;
        case '6':
            number1 = ' six';
            break;
        case '7':
            number1 = ' seven';
            break;
        case '8':
            number1 = ' eight';
            break;
        case '9':
            number1 = ' nine';
    }

 // если сточка равно от 11 до 19, то результ равен елевен и т.д

    if (dozen !== '') {
        result = `${number3}${dozen}`.trim();
    } else if (number == 0) {
        result = 'zero';
    } else {
        result = `${number3}${number2}${number1}`.trim();
    }

    return result; // возвращение результата
};
