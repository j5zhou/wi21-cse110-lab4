function sum(num1,num2,add){
    if(add){
        const result = 0;
        //result = num1 + num2;
        console.log("Added:",result);
    }else return;
    console.log("Final:",result);
}

let student ={
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year':'2022',
    greeting: function(){
        console.log('Hello!');
    },
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad:['CSE 110','CSE 134','VIS 41']
};

//student.greeting();
console.log(true === Boolean(2));

function discountPrices(price,discount){
    const discounted=[]
    const length=price.length;
    //student.greeting();
    //console.log(student.greeting());

    for(let i=0;i<length;i++){
        const discountedPrice = price[i] * (1-discount);
        //finalPrice= Math.round(discountedPrice *100)/100;
        discounted.push(discountedPrice);
    }

    console.log(discounted);


    return discounted;
}


function modifyArray(array,callback){
    const newArr = [];
    for( let i = 0 ; i< array.length; i++){
        newArr.push(callback(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function dosomething(num){
    return num*2;
}

function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);},1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4);
}

printNums();
//modifyArray([1,2,3],dosomething);
//discountPrices([100,200,300],0.5);