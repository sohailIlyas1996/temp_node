
// sync function work step by step 

// <-------------------------------------->

// const fs = require('fs');
// console.log("reading");
// const data = fs.readFileSync('./content/first.txt', 'utf-8');
// console.log(data);
// console.log("reading done");


// async function work and do not wait for the current task

// <-------------------------------------->

const fs = require('fs');
console.log("starting");
fs.readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Completed task");