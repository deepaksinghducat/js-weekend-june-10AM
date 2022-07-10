// class

// class xyz {
//     // name = "fasfasdf"

//     constructor(name = 0) {
//        this.name = name;
//     }

//     greet() {
//         document.write(this.name);
//     }
// }

// var name = "fafas";
// var age = 20;


// var abc = new xyz(name,age);
// abc.greet();


//get name
// class xyz {
   
    // constructor(lang) {
    //     this.lang = lang;
    // }
    
    // get fullName() {
    //     return this.name;
    // }

    // set lang(lang) {
    //     this.lang = lang;
    // }

    // greet() {
    //     document.write(lang);
    // }


// }

// let abc = new xyz("fsafd");
// abc.lang = "fasfsafd";
// abc.greet()

// console.log();


// parents -> properties -> child 

// inheritance
// class xyz {
//     #name = "fsafasf";
//     constructor(name) {
//         this.name = name;
//     }
    
//     greet() {
//         console.log(this.name);
//     }
// }

// class abc extends xyz {
    
//     constructor(name) {
//         super(name)
//     }
// }
// let a = new abc("private");


// Static 

// class xyz {
//     static name  = "fsfasf"

//     static greet() {
//         console.log(this.name);
//     }
// }

// let a = new xyz();


class abc {
   
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    get getName() {
        console.log(this.name);
    }

    set setName(name) {
        this.name = name;
        console.log(this.name);
    }
}

let name = "safsadf"
let age =  20;

const a = new abc(name,age);

// a.name = "fddasfsadfsadfsa";

// a.setName = "fasfsadfasfasfdasdfasfasdfasdf";

// console.log(a.name);






















