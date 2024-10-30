/**
 * Ternary --> three parts
 * 
 * ?   :  
 * condition ? do something when true : do something when false
 */

const age = 12;

//normal
// if(age >= 18){
//     console.log('You can vote')
// }
// else{
//     console.log('You can not vote')
// }

//simple ternary
// age >= 18 ? console.log('you can vote') : console.log('you can not vote')

let price = 500;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)
price = isLeader === true ? 0 : price + 100;

//Optional semi advance ternary

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

price > 1000 ? price / 2 : 0

// price = isLeader === true ? price > 1000 ? price /2 :0 : price + 100;
price = isLeader === true ?
    price > 1000 ?
        price / 2 : 0
    : price + 1000;

