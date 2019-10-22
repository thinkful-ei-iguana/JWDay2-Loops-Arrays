'use strict';

function max(num){

  let newMax = num[0];
  //console.log(num[0]);

  let i = 0;
  while(i < num.length){
    if(newMax < num[i]){
      newMax = num[i];
    }
    i++;
  }
  console.log(newMax);
  return newMax;
}
//max([1,2,3,4,5,6,7,]);

function min (arr) {
  let newMin = arr[0];
  let i = 0;
  while(i < arr.length) {
    if (newMin > arr[i]) {
      newMin = arr[i];
    }
    i++;
  }
  return newMin;
}
//console.log(min([10,3,6,5,7]));


function average(nums){
  let total = 0;

  nums.forEach(num => total += num);
  
  console.log(total);
  console.log(total / nums.length);
  return total / nums.length;
}

average([1,2,3,4,5,6,7,8,9,10]);

function repeat(fn, n) {
  for (let i = 1; i <= n; i++) {
    console.log(fn());
  }
}
repeat(hello, 5);
repeat(goodbye,5);

function hello() {
  return 'Hello world';
}
function goodbye () {
  return 'Goodbye world';
}
function filter(arr, fn) {
  let newArray = [];
  arr.filter(i => {
    if (fn(i)) {
      newArray.push(i);
    }
  });
  return newArray; 
}


const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];


const filteredNames = filter(myNames, function(name) {
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES