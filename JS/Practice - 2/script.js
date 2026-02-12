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

function fiveMessage(message) {
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



// 21. Write a function that removes the first element of an array (using shift).

function removeFirstArray(arr) {
    arr.shift()
    return arr
}
console.log(removeFirstArray([10, 20, 30, 40, 50]))


// 22. Write a function that adds a value to the start of an array (using unshift).

function addTwoElementsFirst(arr) {
    arr.unshift(1, 2, 3)
    return arr
}
console.log(addTwoElementsFirst([4, 5, 6]))


// 23. Write a function that removes the last element of an array (using pop).


function removeLastElement(arr) {
    arr.pop()
    return arr
}
console.log(removeLastElement([1, 2, 3, 4, 5]))



// 24. Write a function that adds a value to the end of an array (using push).

function addEndElement(arr) {
    arr.push(6)
    return arr
}
console.log(addEndElement([1, 2, 3, 4, 5]))



// 25. Write a function that uses splice to remove 2 items from index 1.

function spliceElement(arr) {
    arr.splice(1, 2)
    return arr
}
console.log(spliceElement([1, 2, 3, 4, 5]))



// 26. Write a function that checks if a string contains the letter "a".

function checkString(stringName) {
    return stringName.includes("a")
}
console.log(checkString("Sushanth"))



// 27. Write a function that counts vowels in a string.

function vowelsString(string) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}
console.log(vowelsString("aeiou"));



// 28. Write a function that reverses a string.

function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log("KANNA Reverse : " + reverseString("KANNA"))



// 29. Write a function that checks if a string is empty.

function checkString(string) {
    return string === ""
}
console.log(checkString())



// 30. Write a function that returns how many spaces are in a string.

function spacesInString(string) {
    let count = 0;
    let spaces = " ";

    for (let i = 0; i < string.length; i++) {
        if (spaces.includes(string[i])) {
            count++
        }
    }
    return count;
}
console.log("Space in a String " + spacesInString("Susha nth is a good boy how many spaces"))



// 31. Write a function that returns the sum of all numbers in an array.

function sumOfAllInArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(sumOfAllInArray([10, 5, 2, 30, 5]))



// 32. Write a function that returns the biggest number from an array.

function bigNumberArray(number) {

    var largest = number[0]

    for (var i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }
    return largest
}
console.log(bigNumberArray([10, 80, 55]))



// 33. Write a function that returns the smallest number from an array.

function smallNumberArray(number) {

    var smallest = number[0]

    for (var i = 0; i < number.length; i++) {
        if (number[i] < smallest) {
            smallest = number[i];
        }
    }
    return smallest
}
console.log(smallNumberArray([10, 80, 55]))



// 34. Write a function that doubles each number in an array.

function doublesNumberArray(number) {

    var double = []
    for (var i = 0; i < number.length; i++) {
        double.push(number[i] * 2);

    }
    return double
}
console.log(doublesNumberArray([10, 80, 55]))



// 35. Write a function that removes duplicate items from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



// 36. Write a function that takes an array and returns only positive numbers.

function takeOnlyPositive(array) {
    let positive = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive.push(array[i])
        }
    }
    return positive
}
console.log(takeOnlyPositive([10, 20, -10, -5]))



// 37. Write a function that checks if a number is divisible by 10.

function numberDivisible(number) {
    return number % 10 == 0
}
console.log(numberDivisible(10))



// 38. Write a function that prints the index of each item in an array.

function printIndexArray(array){
    array.forEach((value, index) => {
        console.log(value, index);
    });
}
printIndexArray([10, 50, 21, 8541, 0])



// 39. Write a function that returns the middle element of an array.

// 40. Write a function that removes 1 element from the middle of an array using splice.
