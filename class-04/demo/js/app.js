'use strict';

let userName = 'Saleh';
let num = 4;
// 1.2 
// -2

// Boolean -> true , false

// Array special variable
let nameArray = ['Barra', 'Hadeel', 'Rana', 'AbedAlrahman', 2021, true, ['code101', 'code102', 'code201']];
// console.log(nameArray);
// console.log((nameArray[2]))

// nameArray[6].push('code301');

// delete nameArray[0];

// let newArray = new Array('Sara', 'Waleed')
// console.log(newArray)

// nameArray.push('Ali');
// console.log(nameArray);

// console.log(nameArray.length);

// nameArray.splice(1, 3);
// console.log(nameArray)

for(let i = 0; i < nameArray.length; i++) {
  document.write('<p>'+nameArray[i]+'</p>');
}


/* 
Truth table
- And
  T T -> T
  T F -> F
  F T -> F
  F F -> F
- Or
  T T -> T
  T F -> T
  F T -> T
  F F -> F
*/

// let eduMajor = prompt('Do you thing that I have an IT experience before?', 'Yes or NO').toLowerCase();

// while(eduMajor !== 'yes' && eduMajor !== 'no' && eduMajor !== 'y' && eduMajor !== 'no') {
//   eduMajor = prompt('Please enter Yes or No only', 'Yes or NO').toLowerCase();
// }

let eduMajor;
do {
  eduMajor = prompt('Do you thing that I have an IT experience before?', 'Yes or NO').toLowerCase();
} while(eduMajor !== 'yes' && eduMajor !== 'no' && eduMajor !== 'y' && eduMajor !== 'no');

console.log(eduMajor);

// if(eduMajor === 'yes' || eduMajor === 'y') {
//   alert('this is inside the id condition');
// } else if(eduMajor === 'no' || eduMajor === 'n') {
//   alert('this is inside the id condition');
// } else {
//   alert('please enter yes or no');
// }

let varName = function (params) {
  // console.log(params);
  return params;
}

let returnValue = varName('Code 201');
console.log(returnValue);

const newFuncWay = function (leftSide, rightSide) {
  // console.log('This is a new way to write a function');
  let sum = leftSide + rightSide;
  return sum;
}

// let sum = newFuncWay(newFuncWay(3, 5), 5);
let sum = newFuncWay(3, 5);
sum = newFuncWay(sum, 5);
console.log(sum);

let arr = ['waleed', 'saleh', 'ahmed'];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}