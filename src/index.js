module.exports = function toReadable(number) {
    let result = "";

    let ons = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let twentys = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let tmp = Array.from(number.toString());
    let numbers = [];
    for (let i = 0; i < tmp.length; i++) {
        numbers.push(parseInt(tmp[i]));
    }
    switch (numbers.length) {
        case 3: {
            result = ons[numbers[0] - 1] + " " + "hundred";
            if (numbers[1] == 0) {
                if (numbers[2] != 0) {
                    result = result + " " + ons[numbers[2] - 1];
                }
            }
            if (numbers[1] == 1) {
                result = result + " " + tens[numbers[2]];
            }
            if (numbers[1] > 1) {
                result = result + " " + twentys[numbers[1] - 2];
                if (numbers[2] != 0) {
                    result = result + " " + ons[numbers[2] - 1];
                }
            }
            break;
        }
        case 2: {
            if (numbers[0] == 1) {
                result = result + tens[numbers[1]];
            }
            if (numbers[0] > 1) {
                result = result + twentys[numbers[0] - 2];

                if (numbers[1] != 0) {
                    result = result + " " + ons[numbers[1] - 1];
                }
            }
            break;
        }
        case 1: {
            result = ons[numbers[0] - 1];
            break;
        }
        default: {
            result = "";
            break;
        }
    }
    if (number == 0) {
        result = "zero";
    }
    return result;
};
