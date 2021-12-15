console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
// The only change that needs to be made is increasing the number x is compared to (from 4 to 6)
// something else I did was change the condition simply to see other ways the same outcome could be achieved
for (let x=0; x!=6; x++) {
  console.log(x);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
//What has to change here is the starting value of x
for (let x=3; x<6; x++) {
  console.log(x);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
// In this loop not only did the starting value have to change but also the amount the varible is incremented
// I also did the condition differently, but it also couldve worked as 'x<11' similar to the previous loops
for (let x=2; x<=10; x+=2) {
  console.log(x);
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
// I imagine this is where many have run into infinite loops lol as it can be easy just to change the varible
// and condition, but it is impotant to also change the increment to decrement instead.
for (let x=5; x!=-1; x--) {
  console.log(x);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (star in stars){
  console.log("up in the sky we see", stars[star]);
}
// I made the loop below because i was having troublle with the one above, it was printing 0,1,2,etc.
// But I figured out how to make that work for the loop
/*
for (let x=0; x!=stars.length; x++) {
  console.log("up in the sky we see", stars[x]);
}
*/
// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let x = 0;
while( x < stars.length){
  console.log(stars[x]);
  x++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
x = 0;
while (x <= 5) {
  console.log(x);
  x++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
x = 10;
while (x >= 5) {
  console.log(x);
  x--;
}
