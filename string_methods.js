let str = "Hello World!";

console.log(str.length);

console.log(str[2]);
console.log(str.at(2));
console.log(str.charAt(2));

console.log(str.indexOf("l", 5));

console.log(str.includes("World"));

console.log(str.startsWith("Hel"));
console.log(str.endsWith("ld"));

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.slice(0, 5));
console.log(str.slice(-3));
console.log(str.slice(0, -3));

console.log(str.replace("Hello", "hey"));
console.log(str.replaceAll("l", 5));

console.log(str.split(" "));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

