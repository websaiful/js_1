babu: for(let loopone = 1; loopone <= 3; loopone++){
    console.log ("hello "+ loopone);
    for (let looptwo = 1; looptwo <= 10; looptwo++ ){
        console.log ("------loading "+ looptwo);
        if(loopone == 2 && looptwo==5){
            break babu;
        }
    }

}