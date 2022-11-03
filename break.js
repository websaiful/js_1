let start = 1;
while (true){
   
    console.log('hello '+start);
    if(start==5){
        break;
    }
    start++
}
let myName = '';
while(true){
    let promtName = prompt('Enter Your name');
    if(!promtName){
        break;
    }
    myName += promtName;
}
console.log(myName);

let sum = 0;
while(true){
    let pNumber = +prompt('Enter Your NUmber');
    if(!pNumber){
        break;
    }
    sum += pNumber;

}
console.log(sum);