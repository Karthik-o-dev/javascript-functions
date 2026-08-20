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
