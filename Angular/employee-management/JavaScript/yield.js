function* getData() {

    yield {
        name: "Mayank",
        age: 20,
        designation: "developer"
    }

    yield "10"

    yield "100";

    return "300"

    yield "100";
}


var newGenerator = getData();

var firstData = newGenerator.next();

for(let i = 0; i< 5; i++) {
    console.log(i)
}

var secondData = newGenerator.next();

secondData = newGenerator.next();

secondData = newGenerator.next();

secondData = newGenerator.next();

debugger;