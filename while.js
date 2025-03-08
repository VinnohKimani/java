// infinity loop
// natural terminating loop
// let count = 0;
// while(true){
// console.log(`I love you ${count++}`);
// }

let count = 0;

while (count < 5) {
  console.log(`count ${count}`);
  count = count + 1;
}
console.log(count);

let timer = 0;
while (timer <= 10) {
  console.log(`Alarm Ringing :${timer}`);
  timer = timer + 1;
}

let safaricom = 0;
while (safaricom <= 10) {
  console.log(`Safaricom: ${safaricom}`);
  safaricom = safaricom + 1;
}

// do while loop
// Always runs once  before checking the logics / condition
let add = 0;
do {
  console.log(`add ${add}`);
  add++;
} while (add <= 5); //conditon

console.log("Execution is still happenning");
