module.exports = function toReadable (number) {
    let stringNumber = number.toString(); // делаю из числа строчку  '123'
    let arrayOfNumber = Array.from(stringNumber); // делаю массив из строчки '123' >>> ['1', '2', '3']
    let reverseArray = arrayOfNumber.reverse(); // делаю реверс массива ['1', '2', '3'] >>> ['3', '2', '1']
    
    let firstNumber = reverseArray[0];  // задаю переменные первой, второй и третей цифре
    let secondNumber = reverseArray[1];
    let thirdNumber = reverseArray[2];
    let result = thirdNumber + secondNumber + firstNumber;

    switch (reverseArray[0]) {
        case '0':
            firstNumber = '';
            break;
        case '1':
            firstNumber = 'one';
            break;
        case '2':
            firstNumber = 'two';
            break;
        case '3':
            firstNumber = 'three';
            break;
        case '4':
            firstNumber = 'four';
            break;
        case '5':
            firstNumber = 'five';
            break;
        case '6':
            firstNumber = 'six';
            break;
        case '7':
            firstNumber = 'seven';
            break;
        case '8':
            firstNumber = 'eight';
            break;
        case '9':
            firstNumber = 'nine';
            break;        
    }

    switch (reverseArray[1]) {
        case '0':
            secondNumber = '';
            break;
        case '1':
            secondNumber = 'one';
            break;
        case '2':
            secondNumber = 'twenty';
            break;
        case '3':
            secondNumber = 'thirty';
            break;
        case '4':
            secondNumber = 'forty';
            break;
        case '5':
            secondNumber = 'fivty';
            break;
        case '6':
            secondNumber = 'sixty';
            break;
        case '7':
            secondNumber = 'seventy';
            break;
        case '8':
            secondNumber = 'eighty';
            break;
        case '9':
            secondNumber = 'ninety';
            break;
        default:
            secondNumber = '';     
    }
    switch (reverseArray[2]) {
        case '0':
            thirdNumber = '';
            break;
        case '1':
            thirdNumber = 'one hundred';
            break;
        case '2':
            thirdNumber = 'two hundred';
            break;
        case '3':
            thirdNumber = 'three hundred';
            break;
        case '4':
            thirdNumber = 'four hundred';
            break;
        case '5':
            thirdNumber = 'five hundred';
            break;
        case '6':
            thirdNumber = 'six hundred';
            break;
        case '7':
            thirdNumber = 'seven hundred';
            break;
        case '8':
            thirdNumber = 'eight hundred';
            break;
        case '9':
            thirdNumber = 'nine hundred';
            break;
        default:
            thirdNumber = '';     
    }
    return result;
};
