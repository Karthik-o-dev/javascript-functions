function Student(name1, name2, age) {
    this.firstName = name1;
    this.secondName = name2;
    this.age = age;
    this.fullName = function () {
        console.log(this.firstName + this.secondName)
    }

}

const student1 = new Student("karthik", "O", 30);
const student2 = new Student("alex", 30);
const student3 = new Student("unni", 30);
const student4 = new Student("appu", 30);

const arr = [student1, student2, student3, student4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

student1.fullName();

