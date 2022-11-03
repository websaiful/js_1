const cars = [
    "Saab" , 
    "Volbo" , 
    "BMW", 
    "Corolla"];
    cars [0] = "OPe1"
document.getElementById('demo').innerHTML = cars;
let car1 = "Saab"
let car2 = "Volbo"
let car3 = "BMW"
console.log(car3)
const name = [];
name[0] = "Babu";
name[1] = "Jahidul";
name[2] = "anas";
document.getElementById('jorina').innerHTML = name;
const animal = new Array ("Tiger","Cat","Dog","Perrot")
const person = {firstName:"Jhone",lastName:"Due",age:"46"};
const fruits =["Banana","Apple","Pine apple","junk fruits"];
document.getElementById('sokina').innerHTML = fruits;
function myFunction() {
    fruits.push('Lemon');
    document.getElementById('sokina').innerHTML = fruits;
    
}
const man = [];
man["firstNamae"] = "Jhone";
man["lastName"] = "Doe";
man["age"] = 46;
const points = [40,100,200,5,80,4,90];
const royel = ["Shanji", "Sony", "Babu", "Jahid","jihad"];
let fLen = royel.length;
let text = "<ul>";
for (let i=0; i <fLen; i++) {
    text += "<li>" + royel[i] + "</li>";
}
text += "</ul>";
document.getElementById('normal').innerHTML = text;
const fol = ["Banana", "Apple","Pum"];
fol[6] = "Lemon";
let me = fol.length;
let chosma = "";
for (i=0; i < me; i++){
    chosma += fol[i] + "<br>";
}
document.getElementById('sada').innerHTML = chosma;
const parts = ["Ram","Motherboard","PowerSupply","HardDisk"];
document.getElementById('join').innerHTML = parts.join("*");
parts.pop();
parts.push("Kiwi");
parts.shift();
parts.unshift("Ssd");
document.getElementById('join2').innerHTML = parts.join("*");
let akram = 21 ;
let greeting;
if (akram<18){
   greeting = "Nagorik noy";
}
else{
    greeting = "Nagorik ";
}
document.getElementById('lali').innerHTML = greeting;
if(21<18){
    document.getElementById('drive').innerHTML = true ;
}
else{
    document.getElementById('drive').innerHTML = false;
}
const mobile = ["Samsung","Iphone","vivo","Walton","Oppo"];
document.getElementById('mobile').innerHTML = mobile;
mobile.splice(2,0,"Symphony","Nothing");
mobile.splice(0,1);

document.getElementById('mobile2').innerHTML = mobile;


