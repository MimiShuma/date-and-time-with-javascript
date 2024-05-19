// find the name of today/ weekday
const today = new Date();
const weekday = today.getDay();
console.log(weekday);
// knowledge : 
// 0=sunday 1=monday 2=tuesday 3=wednesday 4= thursday 5=friday 6=satuday

// from numeric value - try to get the name of the weekday :Home Work

//display the numeric value of the weekday
const displayer = document.getElementById('weekday')
// solution 1: using innerHTML
/////displayer.innerHTML = weekday
// solution 2
/// make displayer empty
//solution 1: to make empty
while (displayer.firstChild) {
    displayer.removeChild(displayer.firstChild)
}
///solution 2L to make empty
// displayer.innerHTML = ''
const txtNode = document.createTextNode(weekday);
displayer.appendChild(txtNode);

/* for(child of displayer.childNodes){
  displayer.removeChild(child)
} */ // try to explain later.

//

// find the current time

// knowledge - 10PM 22
let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()

let currentTimne = hours + ":" + minutes + ":" + seconds
console.log(currentTimne)