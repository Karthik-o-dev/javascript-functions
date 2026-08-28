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
