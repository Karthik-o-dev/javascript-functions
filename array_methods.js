let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);
console.log(arr.at(2));
console.log(arr.indexOf(2));
console.log(arr.includes(5));

arr.push(7, 8);
arr.pop();

arr.unshift(0, 10);
arr.shift();

arr[2] = 50;
console.log(arr);


console.log(arr.splice(0, 2, 100, 200));

console.log(arr.reverse());

console.log(arr.join(" "));
console.log(arr);


// hide phn no

const num = 8129926315;
const numString = num.toString();
const numStart = numString.slice(0, 3);
const numEnd = numString.slice(-2);
const hide = numStart + "*****" + numEnd;

console.log(hide);


// hide email

const email = "karthikodungattuthodi@gmail.com";
const splt = email.split("@");

const spltStart = splt[0];
const spltEnd = splt[1];
const start = spltStart.slice(0, -8);
const hiddenStart = start + "********";
const newEmail = hiddenStart + "@" + spltEnd;

console.log(newEmail);


//array method ->yarra dohtem

const text = "array method";
const sp = text.split(" ");
const res = [];

for (i = 0; i < sp.length; i++) {
    const rev = sp[i].split("").reverse().join("");
    res.push(rev);
}

console.log(res.join(" "));

