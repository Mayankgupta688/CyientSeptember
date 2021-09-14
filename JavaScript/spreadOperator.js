var employeeOne = {
    name: "Mayank Gupta",
    age: 20,
    designation: "Developer",
    salary: 2
}

var employeeTwo = {
    ...employeeOne
}

employeeOne.name = "TechnoFunnel";
employeeOne.age = "30";

console.log(employeeTwo.name);