class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
        this.stack = 'stack' //<call stack>; //non standard, but environments support it
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message); // {1}
        this.name = "ValidationError"; // {2}
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

// try {
//     test();
// } catch(err) {
//     alert(err.message); // Whoops!
//     alert(err.name); // ValidationError
//     alert(err.stack); // a list of nested calls with line numbers for each 
// }