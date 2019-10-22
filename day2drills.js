'use strict';

// function max(num){

//   let newMax = num[0];
//   //console.log(num[0]);

//   let i = 0;
//   while(i < num.length){
//     if(newMax < num[i]){
//       newMax = num[i];
//     }
//     i++;
//   }
//   console.log(newMax);
//   return newMax;
// }
// //max([1,2,3,4,5,6,7,]);

// function min (arr) {
//   let newMin = arr[0];
//   let i = 0;
//   while(i < arr.length) {
//     if (newMin > arr[i]) {
//       newMin = arr[i];
//     }
//     i++;
//   }
//   return newMin;
// }
// //console.log(min([10,3,6,5,7]));


// function average(nums){
//   let total = 0;

//   nums.forEach(num => total += num);
  
//   return total / nums.length;
// }

// //average([1,2,3,4,5,6,7,8,9,10]);

// function repeat(fn, n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(fn());
//   }
// }
// //repeat(hello, 5);
// //repeat(goodbye,5);

// function hello() {
//   return 'Hello world';
// }
// function goodbye () {
//   return 'Goodbye world';
// }
// function filter(arr, fn) {
//   let newArray = [];
//   arr.filter(i => {
//     if (fn(i)) {
//       newArray.push(i);
//     }
//   });
//   return newArray; 
// }


// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];


// const filteredNames = filter(myNames, function(name) {
//   return name[0] === 'R';
// });

// //console.log(filteredNames);// => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES


// function hazardWarningCreator(typeOfWarning){
//   let warningCounter = 0;

//   return function(location){
//     warningCounter++;

//     let once = 'time';
//     let multi = 'times';

//     if( warningCounter === 1){
//       console.log(`DANGER! There is a ${typeOfWarning} alert has triggered ${location}`);
//       console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${once} today!`);
//     } if( warningCounter > 1){
//       console.log(`DANGER! There is a ${typeOfWarning} alert has triggered ${location}`);
//       console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${multi} today!`);
//     }
//   };
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const iceWarning = hazardWarningCreator('Black ice on the Road');
// const floodWarning = hazardWarningCreator('Flooding across Road');
// rocksWarning('Main St and Pacific Ave');
//rocksWarning('Centinela Ave and Olympic Blv');

//iceWarning('Hall RD and West');
//iceWarning('Hall RD and King');

//floodWarning('Hall RD and West')
//floodWarning('Hall RD and king')


// let turtleGrooves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
// turtleGrooves = turtleGrooves.filter(pair => pair[0] >= 0 && pair[1] >= 0);
// console.log(turtleGrooves);

// let distances = turtleGrooves.map(pair => pair[0] + pair[1]);
// distances.forEach(distance => {
//   console.log(distance);
// });

let codedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function decode(string){
  let arr = string.split(' ');

  let result = arr.reduce((acc,str) => {
    if(str.length === 3){
      return acc + ' ';
      //console.log( acc += ' ');
    } else {
      return acc + str[str.length - 1].toUpperCase();
      //console.log(acc + str[str.length - 1].toUpperCase());
    }
  }, '');
  return result;
 
}

console.log(decode(codedMessage));