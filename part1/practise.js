function sum(num1,num2,add){
    if(add){
        var result = 0;
        result = num1 + num2;
        console.log("Added:",result);
    }else return;
    console.log("Final:",result);
}

sum(10,10,true);