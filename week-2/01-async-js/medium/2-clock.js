// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23) 

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const formatTime=(data)=>{
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let ampm=hours>12 ? 'PM' : 'AM';

    hours=hours%12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes=minutes< 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`

}

const updateClock=()=>{
const currentDate=new Date();
const time24=`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
const time12=formatTime(currentDate);
console.log(`Time(24 hour): ${time24}`);
console.log(`Time(12 hour): ${time12}`);

setTimeout(updateClock,1000);
}

updateClock();
// setInterval(updateClock,1000);