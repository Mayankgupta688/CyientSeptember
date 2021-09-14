var data: string = "Mayank";
var dataAge: number = 10;
var dataBoolean: boolean = false;

interface IEmployee {
    name: string;
    age: number;
    designation: string;
    salary?: number;
}

var employee: IEmployee = {
    name: "TechnoFunnel",
    age: 10,
    designation: "Developer",
    salary: 1000
}

var employeeOne: IEmployee = {
    name: "TechnoFunnel",
    age: 10,
    designation: "Developer"
}

console.log(data);