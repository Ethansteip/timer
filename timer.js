/*
* timer.js - a function that takes in a number of "alarms" from the user through the terminal and counts up
* by 1 second intervals, notifying the user when the timer encounters one of their alarms.
*/

// Captue the user's alarm clocks
const args = process.argv;
// Initialize alarms array.
const alarms = [];
// Initialize delay
let delay = 1000;
// Initialize timer count which we'll use to compare against alarms
let timerCount = 0;
// take all arguments provided by the user, push them into an array.
for (const arg of args) {
  alarms.push(Number(arg));
}
// remove first 2 index from alarms (unecessary data provided by node), then sort from lowest to highest.
alarms.splice(0, 2);
alarms.sort((i, j) => i - j);

/*
*
* timer - counts up in 1 second intervals, letting the user know when it encounters one of their alarms.
*
* @param {callback} () - checks the timerCount against the alarms array
* @param {delay} delay - the delay in ms the timer counts by.
*
*/

// now start a timer that counts up infinetly.
// If the second we are on happens to be an alarm, console.log the alarm.
const timer = setInterval(() => {
  //increment timer count.
  timerCount += 1;
  //console.log(timerCount);
  if (alarms.includes(timerCount)) {
    //console.log(`Beep! There is an alarm at ${timerCount} seconds`);
    // . will signify the alarm being triggered.
    process.stdout.write('. \n');
    // The beep was not working on my macbook :(
    process.stdout.write('\x07');
  } else {
    console.log("A Second has passed");
  }
}, delay);


// Test Cases
// No numbers provided => PASS
// Input is negative number => PASS
// Input is not a number => PASS