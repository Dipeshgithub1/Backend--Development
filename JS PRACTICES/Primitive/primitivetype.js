/*String - It represents a series of characters and is written with quotes. A string can be
represented using a single or a double quote. */

var str1 = "vivek kumar singh";
var str2 = "john doe";

console.log(str1);
console.log(str2);
console.log(typeof(str1));
console.log(typeof(str2));

//Number - It represents a number and can be written with or without decimals

var x = 3;
var y = 3.6;
console.log(x);
console.log(y);
console.log(typeof(x));
console.log(typeof(y));

/* BigInt - This data type is used to store numbers which are above the limitation
 of the Number data type. It can store large integers and is represented by adding
 “n” to an integer literal. */

 var bigINt = 234567890876456789;
console.log(bigINt);
console.log(typeof(bigINt));

/* Boolean - It represents a logical entity and can have only two values : true or
 false. Booleans are generally used for conditional testing. */
 var a =2;
var b = 3;
var c = 2;

if(a==b){
    console.log("false")
}
else if(a == c){
    console.log("true")
}

/*Undefined - When a variable is declared but not assigned, it has the value of
 undefined and it’s type is also undefined. */
 var z;
var o;
console.log(z);
console.log(o);
console.log(typeof(z));
console.log(typeof(o));

//Null - It represents a non-existent or a invalid value.
var d = null;
console.log(d)
console.log(typeof(d));

//Symbol - It is a new data type introduced in the ES6 version of javascript. It is
// used to store an anonymous and unique value.

var symbol1 = Symbol('symbol');
console.log(symbol1)
console.log(typeof(symbol1))