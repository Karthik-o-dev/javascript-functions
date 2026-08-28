const obj = {
    name: "Karthik",
    age: 22,
    get_age: function () {
        return this.age;
    }
};

console.log(obj.name);
console.log(obj["age"]);

obj.email = "karthikodunagttuthodi.gmail.com";
obj.age = 25;
console.log(obj);

console.log(obj.get_age());

// destructuring

const array = [1, 2, 3, 4];
const [fn, sn, tn, ftn] = array;

console.log(fn, sn, tn, ftn);

const object = {
    name: "Dheema",
    age: 67
}

const { name: FN, age: AGE } = object;

console.log(FN, AGE);

// spread

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr, ...arr2];
newArr.push(4);
console.log(newArr);

const records = {
    Name: "Zidan",
    age: 22
}

const exam = {
    mark: 50
}

const user = { ...records, ...exam };

console.log(user);