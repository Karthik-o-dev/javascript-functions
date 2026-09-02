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

// Find Duplicate Numbers.
let numbers = [10, 20, 30, 20, 40, 10, 50, 30];
let duplicates = [];

// Print square pattern
const length = 5;
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        console.log("*")
    }
}