//*/ Whenever I got stuck in this exercise, I utilized ChatGPT to help understand the tough spots 
/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
// first we need to loop through the array and check to see if it has an odd number using the modulo operator
// return true if found and false if not
function hasOddNumber(arr) {
    for (let num of arr) {
        if (num % 2 !==0) {
            return true;
        }
    }
    return false;
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
// first we need to convert the number into a string, and then loop through it
// if function has a 0 then return true, if not, return false
function hasAZero(num) {
    let numString = num.toString();
    for (let character of numString) {
        if(character ==='0'){
            return true;
        }
    }
    return false;
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
// first we loop through the array, and then see if the number is odd or even
// return false if even and true if odd
function hasOnlyOddNumbers(arr) {
    for (let num of arr) {
        if (num % 2 === 0){

            return false;

        }
    }
    return true;
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
// we're going to make a new set and see if the number exists more than once
// if so return false, if not, return true
function hasNoDuplicates(arr) {}
let empty = new Set();
 for (let num of arr) {
    if(empty.has(num)) {
        return false;
    }
    return true;
 }
/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
// first we loop through the array and see if the obj has the key
//we want to return false if the obj is missing and true if it is there
function hasCertainKey(arr, key) {
    for( let obj of arr) {
        if(!obj.hasOwnProperty(key)) {
            return false;

        }
    }
    return true;
}


/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
// first we will loop through the objects to see if objs have the key or don't match
// return false if it doesn't match up and true if it does
function hasCertainValue(arr, key, searchValue) {
    for(let obj of arr){
        if(!obj.hasOwnProperty(key) || obj[key] !==value){
            return false;

        }
    }
    return true;
}
