


const showPrimes = (input1, input2) => {

    const isGreater = input1 > input2;
    if (!isGreater) {
        for (let i = input1; i < input2; i++) {
            if (isPrime(i) !== false) {
                console.log(i);
            }
        }
    }
    else {
        console.log('First input must be greater than Second input');
    }
};

const isPrime = (input) => {
    var divider = 0;

    for (let i = 1; i <= input; i++) {
        if (input % i == 0) {
            divider++;
        }
    }
    if (divider == 2) {
        return input;
    } else {
        return false;
    }

};

showPrimes(20, 50);
