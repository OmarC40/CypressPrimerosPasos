//1 Hello world
/*
console.log("Hello world");

//variables 
var firstName="John"
let lastName="Smith"

console.log(firstName);

let age,dateBirth,sex;
age="10"
sex="Male"
console.log(age);
age="18"
console.log(age);

//constantes
const occupation ="Engineer"
console.log(occupation);

//data types
var name ="omar";//string
var ageOmar= 25 ;//number
var isHeMarried=false;//boolean
var yearsInMarriage=null //null
var numberOfCars=undefined//undefined


//concatination and interpolation

var price=50
var itemName="Cup"
var messageToPrint="The price of your "+itemName+ " is "+ price +" dollars"//concatenacion
var messageToPrint2=`The price of your ${itemName} is ${price} dollars`//Interpolación

console.log(messageToPrint);
console.log(messageToPrint2);


//objects

var customer={
    firstName:'John',
    lastName:'Smith',
    cars:["volvo","honda","tesla"]
}
customer.firstName="Mike"
console.log(customer.firstName+customer.lastName);

//arrays

var car=["volvo","honda","tesla"]
var numcar=2
car[0]="BMW"
console.log(cars[numcar])
*/

var age=16
var isUSCitizen =true 
var ageismore18 = validage(age)

function validage(ages) {
    let ismore18;
    if (ages <= 17) {
        ismore18 = false;
    } else {
        ismore18 = true;
    }
    return ismore18;
}




function validDriver(ageismore18, isUSCitizen) {
    var eligible = ageismore18 && isUSCitizen;
    var ans;
    if (eligible) {
        ans = "Si puede manejar";
    } else {
        ans = "No puede manejar";
    }
    return ans;
}

console.log("Luis "+validDriver(ageismore18,isUSCitizen))

//console.log(5!==4) //true*/










