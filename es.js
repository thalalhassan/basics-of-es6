//es5


"use strict"; // for make variable strict to format

var arr = [1, 2, 3, 4];

//some simple array operation

console.log(Array.isArray(arr));

arr.forEach(function(val, ind) {
    console.log(val, ind);
});


var newarr = arr.map(function(val) {
    return val * 2;

});
console.log(newarr)


var sqrtarr = arr.map(Math.sqrt);
console.log(sqrtarr)


var employee = [{
        id: 101,
        name: "thalal"
    },
    {
        id: 102,
        name: "hassan"
    },
    {
        id: 103,
        name: "rahman"
    }
];
console.log(employee);

var empId = employee.map(function(val) {
    return val.id;
});
console.log(empId)


var empfilter = employee.filter(function(val) {
    return val.id >= 102;
})
console.log(empfilter)


var sum = 0;
employee.reduce(function(val) {
    console.log("hellooo " + val.id)
    return sum += val.id
});
console.log(sum)



let rslt = employee.every(function(val) {
    return val.id < 200
});
console.log(rslt)


//this // set //get

var person = {
    fName: "thalal",
    lName: "rahman",
    get fullName() {
        return (this.fName + this.lName)
    },
    set update(val) {
        this.fName = this.fName + val;
    }
}
person.update = " hassan "
console.log(person.fullName.toUpperCase());


//es6

var fName = "thalal";
var lName = "hassan";
var age = 100
console.log(`hello ${fName} ${lName} 
welcome`);


//const //var //let //default

const pi = 3.14
    // pi = 4;
console.log(pi)

var i = 0;
for (let i = 0; i < 5; i++) {}
console.log(i)


//spread operator ...

let char = [1, 2, 3];
let char2 = [...char, 4, 5];
console.log(char2)

//string operator
let hello = "hello";
console.log(hello.repeat(5));
console.log(hello.startsWith("h"));
console.log(hello.endsWith("h"));
console.log(hello.includes("h"));


//set concept
let name = new Set()
name.add("thalal").add("hassan").add("r h")
name.delete("hassan")
console.log(name)

let name1 = new Set("hello")
console.log(name1)


//object deConstruction
let pf = {
        pname: "thalal",
        pemail: "thr@mail.com"
    }
    //let pfname=pf.pname
    //let pfemail=pf.pemail

let { pname, pemail } = pf;
console.log(pname, pemail)


//class (pascal case naming of class )

class Person {
    constructor(name, email) {
        this.name = name
        this.email = email

    }

    userDetails() {
        console.log(`UserDetail:
                Name:${this.name}
                Email:${this.email}`)
    }
}
let p = new Person("thr", "rh@gmail.com");
let p1 = new Person("thalal", "thr@gmail.com");
p.userDetails();
p1.userDetails();


//inheritance using extends
class Channel extends Person {
    constructor(name, email, cpackage) {
        super(name, email);
        this.cpackage = cpackage

    }

    packageDetails() {
        console.log(`packageDetail:
                package:${this.name}`)
    }
}

let c1 = new Channel("thr", "@mail", "package")
c1.userDetails();
c1.packageDetails();


//arrow function => 
let mult = (num1, num2) => num1 * num2

console.log(mult(5, 4));


//callback fn eg:setTimeout(fn,tim)
let disp = (id, callback) => {
    console.log("hai " + id);
    callback();
}

disp("thr", () => console.log("end"));


//promise