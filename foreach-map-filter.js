// Whenever I got stuck in this exercise, I utilized ChatGPT to help understand the tough spots 
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
// The function doubleValues loops starting at 0 and progresses one spot til the end of the array
// The double.push function is then taking the index times 2, to then double the current index
function doubleValues(arr){
    for(let i = 0; i < arr.length; i++){
double.push(arr[i] * 2);}    
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

//First we loop over the index starting from 0 and move 1 place til the end of the array
//We then check with the modulo operator % to see if the current index is divisible by 2. The modulo operator works by lettin you know the remainder.
//Ex. 7 %2 = 1 --> where 2 goes into 7  3 times(2+2+2=6) with a remainder of 1. Thus meaning it is an odd number
// lastly we push the even numbers, or the numbers that had an outcome of 0 to a new array
*/
function onlyEvenValues(arr){
    for(let i=0; i < arr.length; i++){
    even.push(arr[i] % 2 === 0);
}
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// The first thing we do is loop through the array starting at the 0 index
// Next, we are checking to see that if the array has a string length of 2 or more.
// If it does, then we are getting the first letter ( index of 0) and the last Letter (string length - 1)
Lastly, once we have the first & last letter, we add them together to be pushed into the new array
*/
function showFirstAndLast(arr){
    for(let i = 0; i < arr.length; i++){
        if(str.length >= 2){
            var firstLetter = str[0];
            var lastLetter = str[str.length - 1];
        }
        answer.push( firstLetter + lastLetter);
    }
    
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

// first thing we do is loop through the array, starting at the index and moving 1 spot at a time
// next, we are taking the index of the array and renaming it object to "take it out"
// lastly, as we loop through the array, we're adding our new term (obj) with the key to equal the value
// to finish it, we return the arrray
function addKeyAndValue(arr,key,value){
    for(let i = 0; i < arr.length; i++){
        obj =arr[i];
        obj[key] = value;
        return arr;
    }
    
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

// first thing we are doing is lower casing the string to make all of the letters the same
// next we are going to loop over the new lowercased strings
// if a letter === either a,e,i,o or u then we are going to add 1 to the vowel count
// at the end, we are returning the vowel count
function vowelCount(str){
    lowerStr = str.toLowerCase
    for(let i = 0; i < lowerStr.length; i++ )
    var vowel = lowerStr[i];
    if ( vowel === 'a' || vowel === 'e' || vowel ==='i' || vowel === 'o' || vowel === 'u'){
        if (count[vowel]){
            count[vowel]++;}
            else {
                count[vowel] = 1 ; 
            }
            return count;


    }
   
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

// in this function, we set the arr.map function in a variable, in side the map function were going to multiply our value times 2 ( to double it)
// then we need to return out value in a new array
function doubleValuesWithMap(arr) {
    var doubled = arr.map(function(value){
        return value * 2;});
}
return doubled;

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

// first thing we want to do is to get our value and the index in our function
// The we want to multiply the value in the array by the index slot that its in.
// Then return new array

function valTimesIndex(arr){
    var multiplied = arr.map(function(value, index){
        return value * index;})
}

return multiplied;

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// first we have to appoint the names in he map function.
// we then att the obj & key together so they can be added on seperatly to eacn name

function extractKey(arr, key){
    var names = arr.map(function(obj){
        return obj[key];})
        return names;
    }

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
// First things first, we create a function using map array, and we are returning the first name then a space, then last.
function extractFullName(arr){
    var names = arr.map(function(obj){
        return obj.first + " " + obj.last;});
        return names;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

// we first start out by using the filter array function looking for objects that share the same key
// Of the array, the ones containing the same key element will be returned with filtered
function filterByValue(arr, key) {
    var filtered = arr.filter(function(obj){
        return obj.hasOwnProperty(key);});
        return filtered;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/
// in this function, we first create our loop searching to see if the index is equal to the value
// if so, the array will return the index or first value in the array, if it does not, then it returns undefined
function find(arr, searchValue) {
for (let i = 0; i < arr.length; i++);{
if (arr[i] === searchValue){
    return arr[i];
}
} else 
return undefined;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
// first we create our loop looking to see if there in an object in our array that has similar key
// if they do, then we return the array and leave the loop, if not, it comes back undefined and goes on to the next
function findInObj(arr, key, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(key)) {
            if (arr[i][key] === searchValue) {
                return arr[i];
            }
        }
    }
    return undefined
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
// we start with creating a variable for the string, then we define our vowel both lower & UPPER caesd
// next we run our loop over each letter in the string to see if it is a vowel, if it is, nothting happens
// but if it doesn't equal any of the vowels, it gets put into our new string, all lowercased
function removeVowels(str) {
let newStr = '';
let vowels = 'aeiouAEIOU';
for (let i = 0; i < arr.length; i++) {
let letter = str[i];
if(!vowels.includes(letter)){
    newStr += letter.toLowerCase();
}
}
return newStr;
}
/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

//  first we are going to filter out the odd numbers in the array by searching numbers that dont end in 0 using the modulo operater
// next we create an array of the odd numbers and multiply them by 2 
function doubleOddNumbers(arr) {
let oddNumbers = arr.filter(function(nums){
    return nums % 2 !==0;
});

let doubledNumbers = oddNumbers.map(function(nums){ 
return nums * 2});
return doubledNumbers;
}