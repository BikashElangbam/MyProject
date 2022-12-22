const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const currentDay = document.querySelector('.weekDay');
const currentDate = document.querySelector('.dateToday');
const dayPeriod = document.querySelector('.period');
const timezones =['Asia/Calcutta', 'America/New_York', 'Europe/London'];

function changeTimeZone(timezone){

    

}
function clock(){
let today = new Date();
let date = today.toLocaleString('en-US',{
    timeZone: 'Asia/Calcutta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday:'long',
});
console.log(today);
console.log(date);
let day = date.slice(0,8);
let hours = date.slice(22,24);
let minutes = date.slice(25,27);
let seconds = date.slice(28,30);
let dateToday = date.slice(10,20);
let period = date.slice(31);

hour.innerHTML = hours;
minute.innerHTML = minutes;
second.innerHTML = seconds;
currentDay.innerHTML = day;
currentDate.innerHTML = dateToday;
dayPeriod.innerHTML = period;
}

const stop = setInterval(clock, 1000);
function pause(){
        clearInterval(stop);
}

function play(){
    setInterval(clock, 1000);
}






// {timeZone: 'Asia/Calcutta'}
// {timeZone: 'America/New_York'}



