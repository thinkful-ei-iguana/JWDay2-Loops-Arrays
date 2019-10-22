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