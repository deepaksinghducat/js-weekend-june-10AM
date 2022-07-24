// Class inheritance

// class Employee {
//     protected name: string = "fsafdsaf"
//     protected age: number = 20

//     constructor(name: string,age : number) {
//         this.name = name;
//         this.age = age;
//     }   

//     details(): string {
//         return `${this.name} is ${this.age}`;
//     }
// }

// class Department extends Employee {

//     constructor(name: string, age: number) {
//         super(name,age);   
//     }

//     details(): string {
//         return `${this.name} is ${this.age}`;
//     }
// }


// const employee = new Employee("fsdafasf",20)
// console.log(employee.details());

//  1 or more class ko extends 


// class Employee {

// }

// class User {

// }

// class Child extends Employee,User {

// }


// Interfaces 

// interface CarProto {
//     model: string
//     hasFourwheel() : boolean;
// }

// interface CarBrand {
//     brand: string
// }

// class Alto implements CarProto, CarBrand {
//     model : string = "alto"

//     brand: string = "Maruti"

//     hasFourwheel() : boolean {
//         return true
//     }
// }

// const alto = new Alto();

// console.log(alto.hasFourwheel());


/// Abstract 


abstract class Employee {
    protected name: string = "fsafdsaf"
    protected age: number = 20

    constructor(name: string,age : number) {
        this.name = name;
        this.age = age;
    }   

    abstract details(): string;
}

class Department extends Employee {

    details(): string {
        return `${this.name} is ${this.age}`;
    }
}



