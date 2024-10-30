const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('Su----patro')
// }
// else{
//     console.log('onno patro khuji')
// }

// if (salary > 25000 || height > 72) {
//     console.log('Su....Patro')
// }
// else {
//     console.log('onno patro khuji')
// }

// more and more condition
// if (salary > 25000 || height > 72 || isBCS == true) {
//     console.log('Su....Patro')
// }
// else {
//     console.log('onno patro khuji')
// }

if (salary > 25000 && height > 72 && isBCS == true) {
    console.log('Su....Patro')
}
else {
    console.log('onno patro khuji')
}

//............Complex condition.....
if (salary > 25000 && hasCar == true || isBCS == true) {
    console.log('Su....Patro')
}
else {
    console.log('onno patro khuji')
}

if (salary > 25000 || hasCar == true && isBCS == true) {
    console.log('Su....Patro')
}
else {
    console.log('onno patro khuji')
}