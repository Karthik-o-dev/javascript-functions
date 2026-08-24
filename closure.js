// closure

// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         console.log("hello invoked");
//     }

//     return innerFunction;
// }

// const outer = outerFunction();
// outer();
// console.log(outer);

function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log(count);
    }

    return innerFunction;
}

const outer = outerFunction();
outer();
outer();
outer();
outer();

// Scope

// global scope

let name = "karthik"

function greet() {
    console.log(name);
}
greet();

// function scope

function scopeFunction() {
    let num = 0;
    {
        let num = 1;
        console.log(num);
    }
    console.log(num)
}
scopeFunction();

// array

const txt = "karthik";
console.log(txt[2]);

const array = ["apple", "orange", "mango"];
console.log(array[1]);
const arr = array[1][2];
console.log(arr);

// pallindrome for words

const str = "malayalam";
const len = str.length;
let isPali = true;
for (let i = 0; i < len / 2; i++) {
    const fn = str[i];
    const ln = str[len - 1 - i];
    if (fn != ln) {
        isPali = false;
        break;
    }
}
console.log(isPali);

