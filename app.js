
// create const to reference the time-left id
const timeLeft = document.querySelector('#time-left')

const birthday = new Date('02/10/2022') 
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 // milliseconds
let timerId

const today = new Date()

console.log(birthday);

function countDown() {
    const today = new Date()
    const timeSpan = birthday - today
    console.log(timeSpan);

    if (timeSpan <= -day) {
      timeLeft.innerHTML = "Hope you had an amazing Birthday!"
      clearInterval(timerId)
      return
    }
    if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday"
    clearInterval(timerId)
    return
    }

// setup days

const days = Math.floor(timeSpan / day)
const hours = Math.floor((timeSpan % day) / hour )
const minutes = Math.floor((timeSpan % hour) / minute) 
const seconds = Math.floor((timeSpan % minute) / second)

const content = `You have ${days} days,  ${hours} hours,  ${minutes} minutes and ${seconds} seconds! `
console.log(content);
timeLeft.innerHTML =  content

}





setInterval(countDown, second)
