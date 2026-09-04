// // reverse

// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length / 2; i++) {
//     temp = numbers[i];
//     numbers[i] = numbers[numbers.length - 1 - i];
//     numbers[numbers.length - 1 - i] = temp;
// }
// console.log(numbers);

// Count Numbers Greater Than 50.

// let a = [25, 75, 40, 90, 55, 30];

// let count = 0;
// for (i = 0; i < a.length; i++) {
//     if (a[i] > 50) {
//         count++;
//     }
// }
// console.log(count);

// Replace Negative Numbers with 0.

// let numbers = [10, -5, 20, -8, 30, -2];
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         numbers[i] = 0;
//     }
// }
// console.log(numbers);

//  Find Duplicate Numbers.
// const numbers = [10, 20, 30, 20, 40, 10, 50, 30];
// let duplicates = [];
// let occ = {};

// for (const num of numbers) {
//     if (occ[num]) {
//         occ[num] = ++occ[num]
//     } else {
//         occ[num] = 1;
//     }
// }
// for (let key in occ) {
//     if (occ[key] > 1) {
//         duplicates.push(Number(key))
//     }
// }
// console.log(duplicates);

// count occurences of a target number
// let number = [10, 20, 10, 30, 10, 40, 20];
// let target = 10;
// let count = 0;

// for (let i = 0; i < number.length; i++) {
//     if (number[i] === target) {
//         count++;
//     }
// }
// console.log("count = " + count);

// Find All Pairs Whose Sum is 10
// let number = [5, 9, 2, 3, 7, 1, 8, 5];
// let pair = [];
// let target = 10;

// for (i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//         if (number[i] + number[j] === target)
//             pair.push([number[i], number[j]])
//     }

// }
// console.log(pair);

// Find the Least Repeated Number.
// let numbers = [10, 20, 10, 30, 20, 10, 40, 30];
// let occur = {};
// let smallest = Infinity;
// for (let num of numbers) {
//     if (occur[num]) {
//         occur[num] = ++occur[num];
//     } else {
//         occur[num] = 1
//     }
// }
// for (let key in occur) {
//     if (occur[key] < smallest) {
//         smallest = Number(key)
//     }
// }
// console.log(smallest);

// function findLeastRepeated(numbers) {
//     let occur = {};
//     let smallest = Infinity;
//     for (let num of numbers) {
//         if (occur[num]) {
//             occur[num] = ++occur[num];
//         } else {
//             occur[num] = 1
//         }
//     }
//     for (let key in occur) {
//         if (occur[key] < smallest) {
//             smallest = Number(key)
//         }
//     }
//     console.log(smallest);
// }
// findLeastRepeated([10, 20, 10, 30, 20, 10, 40, 30]);
// findLeastRepeated([10, 20, 10, 30, 20, 10, 40, 30]);

// Find Common Elements Without Using includes().

// function commonElement(arr1, arr2) {
//     let newArray = [];
//     for (i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 newArray.push(arr1[i])
//             }
//         }
//     }
//     console.log(newArray);
// }
// commonElement([10, 20, 30, 40], [20, 30, 50, 60]);

// Move all the zeros to the end of the array. 
function moveAllZero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            array.splice(i, 1)
            array.push(0);
        }
    }
    console.log(array);

}
moveAllZero([0, 2, 5, 0, 2, 10, 6, 0, 22]);


// Print square pattern
const length = 5;
for (let i = 0; i < length; i++) {
    let str = "";
    for (let j = 0; j < length; j++) {
        str = str + " * "

    }
    console.log(str)
}

