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

// spread array

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr, ...arr2];
newArr.push(4);
console.log(newArr);

// object

const records = {
    Name: "Zidan",
    age: 22
}

const exam = {
    mark: 50
}

const user = { ...records, ...exam };

console.log(user);


const data = { name: "Hari", age: 30 };
const newData = { ...data };
newData.name = "alex";
console.log(data, newData);

// Rest operator

const box = {
    Name: "karthik",
    age: 22,
    City: "Melattur"
};

const { Name, ...details } = box;
console.log(Name);
console.log(details);

const rest = ["user1", "user2", "user3", "user4"];
const [ur1, ur2, ...restInfo] = rest;
console.log(ur1, ur2, restInfo);




