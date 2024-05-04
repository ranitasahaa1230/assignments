// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

//so have to call settImeout recursively
let count=0;
function increaseCount(){
    count++;
    console.log(count);
    setTimeout(increaseCount, 1000);
}

increaseCount();

//but it currently only increments the count once after a delay of 1000ms (1 second). 
// let count=0;
// setTimeout(()=>{
//     count++;
//     console.log(count);
// },1000)






































































// (Hint: setTimeout)