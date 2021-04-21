function sum(num1,num2,add){
    if(add){
        const result = 0;
        //result = num1 + num2;
        console.log("Added:",result);
    }else return;
    console.log("Final:",result);
}

function discountPrices(price,discount){
    var discounted=[]
    var finalPrice=0;
    
    for(var i=0;i<price.length;i++){
        var discountPrice = price[i] * (1-discount);
        finalPrice= Math.round(discountPrice *100)/100;
        discounted.push(finalPrice);
    }

    console.log(i);


    return discounted;
}

discountPrices([100,200,300],0.5);