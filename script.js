// function declaration

greet();

function greet() {
    console.log("hello");
}

// function expresion

const sampleNum = function () {
    console.log("hey");
}

sampleNum();

// hoisting

console.log(a);
var a;

// 2 phase -> memory allocation, code execution

sum(10, 20);
sum(20, 30);
sum(100, 50);

function sum(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
}

// default parameter

function greeting(name = "Guest") {
    console.log("hai " + name)
}

greeting("karthik");
greeting();

//gst=18%

function taxPrice(price, gst = 18) {
    const tax = price * gst / 100;
    console.log(price + tax);
}

taxPrice(1000);
taxPrice(1000, 10);

// return

function calc(value) {
    return value;
}
const rev = calc(10);
console.log(rev);




function findSum(a, b) {
    return a + b;
}

const find = findSum(2, 3);
console.log(find);

// area, volume

function area(l, b) {
    return l * b;
}

function volume(area, h) {
    return area * h;
}

const ar = area(10, 20)
console.log(ar);

const vol = volume(ar, 10);
console.log(vol);

// arrow

const arrowFun = (a, b) => {
    const res = a + b;
    return res;
}

// const res2 = arrowFun(2, 3);
// console.log(res2);


// const arrowFunc = (a, b) => a + b;

// const res3 = arrowFunc(3, 4);
// console.log(res3);

const arrowFunc = n => n * n;

const res3 = arrowFunc(10);
console.log(res3);

// sum of n number

const sumOfNum = n => (n * (n + 1)) / 2;
const res4 = sumOfNum(100);
console.log(res4);

// armstrong problem

let num = 153;
let original = num;

sum = 0;

let digits = num.toString().length;
while (num > 0) {
    digit = num % 10;
    sum = sum + digit ** digits;
    num = parseInt(num / 10);
}

if (sum == original) {
    console.log("the number is armstrong");
} else {
    console.log("this is not a armstrong number");
};


