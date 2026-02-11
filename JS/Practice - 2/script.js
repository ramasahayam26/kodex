//  1.  Write a function that prints "Hello World".

function helloWorld() {
    console.log('Hell World')
}
helloWorld()


// 2.Write a function that adds two numbers and returns the result

function add2num(a, b) {
    console.log('Sum of two numbers a + b = ', a + b)
    return 0
}
add2num(22, 5)


// 3.  Write a function that takes a name as a parameter and prints it.

function nameParameter(name) {
    console.log(name);
}
nameParameter("Sushanth");


// 4.  Create a function that returns the square of a number.

function numberSquare(sN) {
    console.log(sN * sN);
}
numberSquare(15);


// 5.  Write a function that checks if a number is even.

function numberEven(eN) {
    if (eN % 2 == 0) {
        console.log(eN + ' is a even number')
    } else {
        console.log(eN + ' is not a even number')
    }
}
numberEven(12)


// 6.  Create a function that returns the last character of a string.

function lastCharacter(string) {
    return string[string.length - 1]
}
console.log('Last Character of a string is ' + lastCharacter("Sushanth"))


// 7. Write a function that returns the first element of an array.

function getFirstElement(arr) {
    return arr[0];
}
console.log('First element of array is ' + getFirstElement([10, 20, 30, 40, 50]));


// 8.  Write a function that returns the last element of an array.

function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log('Last element of array is ' + getLastElement([10, 20, 30, 40, 50]));


// 9.  Write a function that prints all elements of an array.

function allElements(array) {
    return [array]
}
console.log([10, 20, 30, 40, 50])


// 10. Write a function that returns the length of an array.

function lengthOfArray(array) {
    return [array.length];
}
console.log(lengthOfArray([10, 20, 30, 40, 50]))


// 11. Write a function declaration that multiplies two numbers.

function numberMultiplies(a, b) {
    console.log("Multiplication of two number is " + a * b)
    return 0
}
numberMultiplies(5, 5)


// 12. Write a function expression that subtracts two numbers.

function numberSubtraction(a, b) {
    console.log("Subtraction of two number is ", a - b)
    return 0
}
numberSubtraction(7, 5)


// 13. Write an arrow function that converts a string to uppercase.

var stringUppercase = (string) => {
    return string.toUpperCase()
}
console.log(stringUppercase("sushanth"))


// 14. Write an arrow function that calculates a number's cube.

const cube = (num) => {
    return num ** 3;
};
console.log(cube(6));



// 15. Create a function that joins two strings and returns the result.

function joinTwoString(str1, str2) {
    return str1 + str2
}
console.log(joinTwoString("Hello.... ", "Sushanth"))



// 16. Write a function that takes two parameters and returns which one is bigger.

function biggerNumber(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(biggerNumber(10, 26))



// 17. Write a function that takes three parameters and returns the smallest number.

function smallestNumber(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1
    }
    else if (n2 >= n1 && n2 >= n3) {
        return n2
    }
    else {
        return n3
    }
}
console.log(smallestNumber(10, 20, 30))



// 18. Write a function that prints any message five times (using a parameter).

function fiveMessage (message){
      for (let i = 0; i < 5; i++) {
        console.log(message);
    }
}
fiveMessage("Hai Sushanth");


// 19. Write a function that takes an array and returns only even numbers.

function getEvenNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));



// 20. Write a function that takes an array and returns only odd numbers.

function getOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));

