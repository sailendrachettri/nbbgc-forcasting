
// ________________________FOOTER STARTED________________________
let footerYear = document.getElementById("footerYear");
let date = new Date();
let year = date.getFullYear();

footerYear.innerText = year;

// footer countdown
let footerCount = document.getElementById('footerCount');
let footerCountMin = document.querySelector('#footerCountMin')

let sec = 0;
let mins= 0;

setInterval(()=>{
  sec++;
  footerCount.innerText = sec;
  footerCountMin.innerText = mins;
  if(sec > 59){
    sec = 0;
    mins++;
  }
},1000)


// ________________________FOOTER ENDED________________________

// ________________________NAVBAR DATE AND TIME STARTED________________________
let todaysDate = date.getDate();
let month = date.getMonth() + 1;
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let setMinutes = document.getElementById('setMinutes');
let setAmPm = document.getElementById('setAmPm');

let amPM = hour >= 12 ? 'pm' : 'am';
hour = hour % 12;
hour = hour ? hour : 12;
minutes = minutes < 10 ? '0' + minutes : minutes; // if minutes is less than 10 the add 0 os it looks like something 01, 02 mins etc.

let dateAndTime = document.getElementById("dateTime");
dateAndTime.innerHTML = "Today: " + todaysDate + "." + month + "." + year + " - " + hour + ":" + minutes;
setAmPm.innerHTML = amPM;

// ________________________NAVBAR DATE AND TIME ENDED________________________


// ________________________AUTO SCROLL FUNCNALITY STARTED________________________
let scrollVal = 0
let scrollInterval;
function pageScroll() {
    scrollVal++;
    if(scrollVal == 1){
      scrollInterval = setInterval(()=>{
        window.scrollBy(0,1)
      },100);  
    }
    else if(scrollVal == 2){
        clearInterval(scrollInterval)
        scrollVal = 0
    }
}

let flexSwitchCheckDefault = document.getElementById('flexSwitchCheckDefault');
flexSwitchCheckDefault.addEventListener('click', pageScroll);

// ________________________AUTO SCROLL FUNCNALITY ENDED________________________