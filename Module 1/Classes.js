class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
        console.log(`Страна: ${this.country}`);
    }
}

const person1 = new Person("Иван", 30, "Россия");
const person2 = new Person("Мария", 25, "Беларусь");

person1.displayInfo();
person2.displayInfo();