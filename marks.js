//latter grading and using logical and
var marks = prompt('Enter your number:');
if(marks>100 || marks<0)
console.log('ivalid marks');
else if(marks >=80 && marks<=100)
console.log('A+');
else if(marks >=70 && marks<=80)
console.log('A');
else if(marks >=60 && marks<=70)
console.log('A-');
else if(marks >=50 && marks<=60)
console.log('B');
else if(marks >=40 && marks<=50)
console.log('C');
else if(marks >=33 && marks<=40)
console.log('D');
else
console.log('Fail');
//FIND VOWEL and using logical or
var latter = prompt('Enter a latter:');
latter = latter.toLowerCase();
if(latter=="a"||latter=="e"||latter=="i"||latter=="o"||latter=="u")
console.log('vowel');
else{
    console.log('consonent');
}