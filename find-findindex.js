//*** */ Whenever I got stuck in this exercise, I utilized ChatGPT to help understand the tough spots 
/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

// We're going to loop through the users and see if they match
// if it matches, return it, if not, return undefined
function findUserByUsername(usersArray, username) {
  for(let user of users){
    if (user.username === username) {
      return user;
    }
  }
  return undefined;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
// Were going to loop through the array and check if they user & usernames are matching
// if it matches, splice it out - if not, return undefined
function removeUser(usersArray, username) {
  for(let i = 0; i < users.length; i++){
    if (users[i].username === username) {
      return users.splice(i, 1) [0];
    }
  }
  return undefined;
}