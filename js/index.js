// // var d = new Date();
// // document.getElementById('demo').innerHTML = d.toLocaleDateString();
// // months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
// // document.getElementById('demo').innerHTML='Welcome to' + ' ' + months[d.getMonth()];

// // var d = new Date();
// // document.getElementById('de').innerHTML = d.toUTCString();
// // var d = new Date();
// // document.getElementById('dem').innerHTML = d.getFullYear();
// // var d = new Date();
// // document.getElementById('emo').innerHTML = d.getHours();
// // var d = new Date();
// // document.getElementById('mon').innerHTML = d.getMilliseconds();
// // var d = new Date();
// // fu
// // document.getElementById('wed').innerHTML = d.getHours();
// // hours =d
// // document.getElementById('demo').innerHTML='Welcome to' + ' ' + months[d.getMonth()];

// // document.getElementById('thur').innerHTML = d.ge();
// // // new Date()

// var now = new Date();
// var urgent = now.getHours();

// if (now < 12)
// {
//     document.write('GOOD MORNING');
// }
// else if
//     (now > 12 || now < 18){
//     document.write('Good Afternoon' + " " + name);
// }
// else if(now > 18){
//     document.write('good night');
// }

// document.getElementById('demo').innerHTML = d.getHours

var d = new Date;
let now = d.getHours()
document.getElementById("demo").innerHTML = now;

if(now < 12){
    document.getElementById("demo").innerHTML = "Goodmorning" + ' ' + "may" + "your" + 'day' + 'be' + 'favoured!';
    document.getElementById("demo").style.color = 'purple'
    
}
else if(now > 12 && now < 18 ){
    document.getElementById("demo").innerHTML = "Goodafternoon " + ' ' + " darling" ;
    document.getElementById("demo").style.color = 'blue'
    
}else if(now > 12 ){
    document.getElementById("demo").innerHTML = "Goodevening!"  + ' ' + "Did "  + "you " + "smile " + "today? ";
    document.getElementById("demo").style.color = 'red'
    

}

let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");
function rotate() {
  const currrentDate = new Date();
  const hours = currrentDate.getHours();
  const minutes = currrentDate.getMinutes();
  const seconds = currrentDate.getSeconds();
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction =(minutesFraction + hours) / 12;
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

}
setInterval(rotate, 1000);
