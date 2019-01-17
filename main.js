console.log("Hello World!")

obj = {
    number: 123.456,
    string: "Hello GPB",
    boolean: true,
    object: {
        name: "Vasya",
        arr: [0, 1, 2]
    },
    null: null,
}

console.log(obj)
console.log(JSON.stringify(obj))