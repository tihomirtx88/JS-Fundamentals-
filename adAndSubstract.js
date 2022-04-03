function solve(input) {

    let arrOfNumbers = input;
    let newArr = [];
    let sumOriginalArr = 0;
    let sumSecoundAdd = 0;
    let arrLenght = arrOfNumbers.length;
    for (let i = 0; i < arrLenght; i++) {
        let currentNumber = arrOfNumbers[i];
        sumOriginalArr += currentNumber;
        let newNumber;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            newArr.push(newNumber);
        }
        else {
            newNumber = currentNumber - i;
            newArr.push(newNumber);
        }
        sumSecoundAdd += newNumber;
      
    }
    console.log(newArr);
    console.log(sumOriginalArr);
    console.log(sumSecoundAdd);
}

solve([5, 15, 23, 56, 35]);