
function test(){
    alert('Hello');
}

function printName(firstName, Lastname = "default"){

    console.log(`Hello ${firstName} ${Lastname}`);//test dfault peramiter hisebe kaj korbe jodi function call ar modde kono second argument na thake|
}
printName("saiful islam ");


function sum(number1, number2=1){
    console.log(number1*number2);
}

sum(2);