// # JavaScript Practice – Arrays & Objects


// 1. Write a function that uses `forEach()` to calculate the total sum of an array.

function totalSumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log("Total sum of an array ", totalSumArray([10,20,30,40,50]));


// 2. Write a function that uses `map()` to return a new array where each number is squared.

function squareNumbers(arr){
    return arr.map(function(num){
        return num * num;
    });
}
console.log("Square of the array- ", squareNumbers([2, 3, 4, 5]));


// 3. Write a function that uses `filter()` to return only numbers greater than 50.

function filter (arr){
    return arr.filter(function (filt){
        return filt > 50;
    } )
}
console.log("Numbers greater than 50 - ", filter([10, 20, 30, 40, 50, 70, 80, 90, 100]))



// 4. Write a function that checks whether two values are strictly equal using `===`.

function checkTwoValues(val1, val2){
    return val1 === val2
}
console.log("Check two values", checkTwoValues(5,5))



// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.

function arrayMutability(arr){
    arr.push(50,60)
    return arr
}
console.log( "Pushed value" ,arrayMutability([10,20,30,40]))


// 6. Write a function that removes the last element immutably (without modifying original array).

function removeArray(arr){
    arr.pop()
    return arr
}
console.log("Remove Last Element ", removeArray([10,20,30,40]))


// 7. Write a function that sorts numbers in ascending order using a proper compare function.

function sortAscendingOrder(ass){
    return ass.sort()
}
console.log("Sorted numbers in ascending order", sortAscendingOrder([30,20,10]))


// 8. Write a function that sorts strings alphabetically.

function sortAbcd(abc){
    return abc.sort()
}
console.log("Sorted strings alphabeticlly", sortAbcd(["Kanna", "Ball", "Water", "Drink" ]))


// 9. Write a function that reverses an array without using `reverse()`.

function reverseArray(arr){
    var newArray = []
    for(var i = arr.length-1; i>=0; i-- ){
        newArray.push(arr[i])
    }
    return newArray
}
console.log("Array reverse without using reverse", reverseArray(["Kanna", "Ball", "Water", "Drink"]))


// 10. Write a function that merges two arrays using `concat()` and returns the result.

var arr1 = ["Kanna", "Ball", "Water", "Drink"]
var arr2 = [10,20,30,40]

function mergeArray(){
   return arr1.concat(arr2)
}
console.log("Merging two arrays using concat()", mergeArray())


// 11. Write a function that merges two arrays and removes duplicate values.

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

function mergeAndRemoveDuplicates(arr1, arr2){
    return [...new Set([...array1, ...array2])];
}

console.log(mergeAndRemoveDuplicates(arr1, arr2));


// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

var array = [10, 20, 30, 40, 50];

function checkArray(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
    return false;
}
console.log(checkArray(array, 10)); // true
console.log(checkArray(array, 99)); // false


// 13. Write a function that uses `includes()` to check if an array contains a specific value.

function checkAr̥rayUsingIncludes(array){
    return array.includes(20)
}
console.log("Finding value using includes()", checkAr̥rayUsingIncludes([10, 20, 30, 40, 50]))


// 14. Write a function that filters strings starting with "A" using `startsWith()`.

function checkStartsWith(array){
    return array.filter(item => item.startsWith("A"));
}
console.log(checkStartsWith(["Kanna", "Apple", "Ball"]))


// 15. Write a function that uses `find()` to return the first number greater than 100.

function findGreaterNumber(number){
    return number.find((element) => element > 100);
}
console.log(findGreaterNumber([90, 80, 60, 101, 200,]))


// 16. Create an object and write a function that returns all its keys using a loop.

let person = {
    name: "Sushanth",
    age: 22,
    Study: "B-TECh",
    Branch: "ECE",
}

function getKeys(obj){
    let keys = [];

    for(let key in obj){
        keys.push(key);
    }
    return keys;
}
console.log(getKeys(person));


// 17. Write a function that adds a new property to an object immutably.

let student = {
    firstName: "Sushanth",
    age: 22,
    Study: "B-TECh",
    Branch: "ECE",
}
function addNewProperty (obj){
    return {
        ...obj,
        lastName: "Reddy"
    };
}
let updatedStudent = addNewProperty(student);
console.log(updatedStudent);


// 18. Write a function that updates a property in an object.


function updateProperty (obj){
    obj.age = 23
    return obj;
}
let updatedProperty = updateProperty(student);
console.log(updatedProperty);



// 19. Write a function that checks whether a specific key exists inside an object..

function keyCheck (obj){
    console.log('firstName' in student)
}
keyCheck()


// 20. Write a function that converts an object into an array of key-value pairs.

function objectToArray(obj){
    return Object.entries(obj);
}

console.log(objectToArray(student));
