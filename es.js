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
        this.fName = this.fName + val
    }
}
person.update = " hassan "
console.log(person.fullName.toUpperCase());


//es6