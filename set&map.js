//set

const number = new Set();
number.add(10);
number.add(20);
number.add(30);
number.add(40);

console.log(number);

number.delete(30);
console.log(number);

console.log(number.has(20));

number.clear();
console.log(number);

const num = new Set([1, 2, 3, 4, 5, 6]);
num.add(1);
num.add(2);
console.log(num);

arr = [1, 2, 3, 4, 5, 6];
for (const val of arr) {
    console.log(val);
}

//map key -> value

const student = new Map();
student.set("Name", "karthik");
student.set("Age", 22);
student.set("place", "Melattur");

console.log(student);

console.log(student.has("Name"));

console.log(student.get("Name"));
console.log(student.get("Age"));

student.delete("Age");
console.log(student);

student.clear();
console.log(student);

// for of

// const std = new Map();
// std.set("Name", "Alan");
// std.set("Age", 30);
// std.set("place", "Kollam")
// std.set("State", "Kerala");

// for (let val of std) {
//     console.log(val);
// }

// const std = new Map();
// std.set("Name", "Alan");
// std.set("Age", 30);
// std.set("place", "Kollam")
// std.set("State", "Kerala");

// for (let [key, value] of std) {
//     console.log(key, value);
// }

// const std = new Map();
// std.set("Name", "Alan");
// std.set("Age", 30);
// std.set("place", "Kollam")
// std.set("State", "Kerala");

// for (let key of std.keys()) {
//     console.log(key);
// }

// const std = new Map();
// std.set("Name", "Alan");
// std.set("Age", 30);
// std.set("place", "Kollam")
// std.set("State", "Kerala");

// for (let key of std.values()) {
//     console.log(key);
// }

const std = new Map();
std.set("Name", "Alan");
std.set("Age", 30);
std.set("place", "Kollam")
std.set("State", "Kerala");

for (let [key, value] of std.entries()) {
    console.log(key, value);
}




