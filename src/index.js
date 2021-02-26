module.exports = function toReadable(num) {
    if (num == 0) {
        return 'zero';
    }
    let arr = [0, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        arr2 = ['and', 0, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        arr3 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        hundreds = Math.floor(num / 100),
        tens = Math.floor((num / 10) % 10),
        ones = (num % 100) % 10,
        result = '';

    if (hundreds != 0) {
        result += (arr[hundreds] + ' hundred');
    }
    if((ones!=0 || tens !=0) && hundreds!=0){
        result+= ' ';
    }
    if (tens == 1) {
        result += arr3[ones];
        return result;
    }
    if (tens != 0) {
        result += arr2[tens];
    }
    if(ones!=0){
        result+= ' ';
    }
    if (ones != 0) {
        result += arr[ones];
    }
    result = result.replace(/\s+/g, ' ').trim();
    return result;
}
