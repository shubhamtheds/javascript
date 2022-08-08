//#1 -- For loop in Javascript.
const shubham = ['shubham'];

function findShubham1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'shubham') {
      console.log('Found SHUBHAM!');
    }
  }
}


findShubham1(shubham);

//1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

// function findNemo2(fish) {
//   let t0 = performance.now();
//   for (let i = 0; i < fish.length; i++) {
//     if (fish[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
// }

// findNemo2(everyone)
// findNemo2(fish)
// findNemo2(nemo)
// findNemo2(large)





// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {  //O(1)
//   let a = 10;    //O(1)
//   a = 50 + 3;   //O(1)

//   for (let i = 0; i < input.length; i++) {  //O(n)
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }

// Big O(3+4n)



// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) { //O(1)
//   let a = 5;  //O(1)
//   let b = 10;  //O(1)
//   let c = 50;  //O(1)
//   for (let i = 0; i < input; i++) {  //O(n)
//     let x = i + 1;   //O(n)
//     let y = i + 2;   //O(n)
//     let z = i + 3;   //O(n)

//   }
//   for (let j = 0; j < input; j++) {  //O(n)
//     let p = j * 2;   //O(n)
//     let q = j * 2;   //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }

// //Big 0(5+7n)
// or // //Big 0(4+5n) will be same bcz here we don't count fn itself.

// //#1 -- For loop in Javascript.
// const nemo = ['bhagwat', 'sharan', 'nemo', 'raj', 'karan', 'sharma'];

// const nemo_end = ['bhagwat', 'sharan', 'raj', 'karan', 'sharma', 'nemo'];

// function findNemo1(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log('running')
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo1(nemo);
// console.log('another scnario')
// findNemo1(nemo_end);

//Log all pairs of array

// const boxes = ['a', 'b', 'c', 'd', 'e'];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }

// logAllPairsOfArray(boxes)

// // nested loops are treated as O(n^2) i.e. n * n 
// // if they are applies at different arrays of inputs they are treated as O(a * b) by forcing Rule no 3



// function printAllNumbersThenAllPairSums(numbers) {

//   console.log('these are the numbers:');
//   numbers.forEach(function(number) {
//     console.log(number);
//   });

//   console.log('and these are their sums:');
//   numbers.forEach(function(firstNumber) {
//     numbers.forEach(function(secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5])



//#5 Space complexity O(1)
// function boooo(n) {
//     for (let i = 0; i < n; i++) {
//         console.log('booooo');
//     }
// }

// // #6 Space complexity O(n)
// function arrayOfHiNTimes(n) {
//     var hiArray = [];
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi';
//     }
//     return hiArray;
// }

// arrayOfHiNTimes(6)







// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false
// }

// //O(a*b)
// //O(1) - Space Complexity

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

// function containsCommonItem2(arr1, arr2) {
//   // loop through first array and create object where properties === items in the array
//   // can we assume always 2 params?

//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   // loop through second array and check if item in second array exists on created object. 
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false
// }

// //O(a + b) Time Complexity
// //O(a) Space Complexity

// // containsCommonItem2(array1, array2)

// function containsCommonItem3(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item))
// }

// containsCommonItem(array1, array2)
// containsCommonItem2(array1, array2)
// containsCommonItem3(array1, array2)





// // Naive
// function hasPairWithSum(arr, sum){
//   var len = arr.length;
//   for(var i =0; i<len-1; i++){
//      for(var j = i+1;j<len; j++){
//         if (arr[i] + arr[j] === sum)
//             return true;
//      }
//   }

//   return false;
// }

// // Better
// function hasPairWithSum2(arr, sum){
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++){
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// hasPairWithSum2([6,4,3,2,1,7], 9)