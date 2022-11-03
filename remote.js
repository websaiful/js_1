const fruits = ["Banana", "Apple", "Orange"];
document.getElementById('demo').innerHTML = fruits;
fruits.sort();
fruits.reverse();
document.getElementById('demo1').innerHTML = fruits;
const d = new Date();
var x = 10;
var y = 10;
var z = x+y;
document.getElementById('demo2').innerHTML = Math.random();
document.getElementById('demo3').innerHTML =Math.floor(Math.random()*101)+1;
function getRndinteger(min,max){
    return Math.floor(Math.random()*(max -min))+min;
}
const a = new Boolean(false);
const b = new Boolean(false);
document.getElementById("demo5").innerHTML = (x==y);
var w = 10;
document.getElementById('demo6').innerHTML = (w != 8);
let c = 10;
document.getElementById('demo7').innerHTML = (x > 12);
function myFunction(){
    let age = document.getElementById('age').value;
    let Voteable = (age < 18) ? "Nagorik noy" : "Nagorik";
    document.getElementById('demo8').innerHTML = Voteable;

}
const time = new Date().getHours();
let greeting;
if(time<10){
    greeting="Good morning";
}else if(time<20){
    greeting = "Good Day";

} else{
    greeting = "Good evening";
}
document.getElementById('demo9').innerHTML = greeting ;
let age = 35 ;
if (age<18){
    console.log('i am not adult');
}else if(age==18){
    console.log('i am mutured');
} else if (age >18 && age < 30){
    console.log('i am adullt full')
}else{
    console.log('bura');
}
let subject = 30;
if (subject>80){
console.log('A+');
}else if(subject<80 && subject>70){
    console.log('A');
}else if (subject<70 && subject>60){
    console.log('A-');
}else if (subject<60 && subject>50){
    console.log('B');
}else if (subject<50 && subject>40){
    console.log('C');
}else if (subject==40){
    console.log('D');
}
else{
    console.log('fail');
}
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo10").innerHTML = "Today is " + day;
var e = new Date();
document.getElementById('demo11').innerHTML = e;

