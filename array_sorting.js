"use strict";

// Write functions to sort the following in ascending order. Include at least 1 what if/assumption you are working with:
var array1 = ["zoe","nicole", "lyric", "nancy", "anna"]; // [Anna","Lyric","Nancy", "Nicole", "Zoe"]
var array2 = [5,2,7,3]; //[2,3,5,7]
var array3 = [10,2,100,3]; //[2,3,10,100]

// Stretch, sort this array of objects in ascending order by age.:
var array4 = [];
array4[0] = {name: "Zoe", age:10, numDogs:2};
array4[1] = {name: "Nick", age:2, numDogs:3};
array4[2] = {name: "Lyric", age:34, numDogs:4};
array4[3] = {name: "Nancy", age:100, numDogs:1};
array4[4] = {name: "Anna", age:7, numDogs:2};
array4[5] = {name: "Edward", age:59, numDogs:0};

function sortedArray(arr) {
  var result= [];
  for(var i=0; i <= arr.length; i++){
    result.push(arr[i][0].toUpperCase() + arr[i].slice(1));


  }

  result.sort();
  return result;
}
sortedArray(array1);


function sortNums(arr){
  return arr.sort(function(x, y){
  return x-y;
  });
}
console.log(sortNums(array2));

function sortObjects(arr){
  var result= [];
  arr.sort(function(x,y){
  return x.age < y.age;
  // for (var i = 0; i < arr.length; i++) {
  //   arr[i].age;
  });
  return result;
}
sortObjects(array4);


// array1.sort();
// array2.sort();
// array3.sort(function compareNumbers(a, b){
//   return a-b;
// });
// console.log(array4);
// array4.sort(function(a,b){
//   if(a.age>b.age){
//     return 1;
//   }
//   if (a.age<b.age)
//   return -1
// })
