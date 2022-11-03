

function myName(firstName, Lastname){
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
  console.log('Hello4');
  console.log('Hello5');
  
  if (firstName == "test"){
    return "firstname test"
  }
  console.log('Hello6');
  console.log('Hello7');
  console.log('Hello8');
  console.log('Hello9');
  
  if(Lastname == "hello"){
    return
  }
  console.log('Hello10');
  console.log('Hello11');
    

}
 let newName = myName( "test" , "hello");

 console.log(newName);

 function memberRegistration(MemberId, memberAge){
    if(MemberId == 12345 &&  memberAge >=18){
        return true;
    }
    return false;
 }
 if(memberRegistration(12345,18)){
  alert('registration succesfull');
 }else{
    alert('registration fail');
 }