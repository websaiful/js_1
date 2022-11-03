

function getPrimeNumber(Prime){



    primeFirstLoop: for (let outerNumber = 2; outerNumber <= Prime; outerNumber++){
    for (let innerNumber = 2; innerNumber < outerNumber; innerNumber++){
        if(outerNumber % innerNumber == 0){
        continue primeFirstLoop;
        }

    }
    console.log(outerNumber + " is a prime number");
    }
}

getPrimeNumber(200);