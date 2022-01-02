// Some of the built-in types of TypeScript are: string, number, boolean, object, array, void, null, any

// If we don't know the type then we can use the unknown type
let x: unknown;

console.log(x)

// Tuples are specific types which allow us to express arrays with fixed number of elements whose types are known
const tuple: [string, number] = ['January', 2]

console.log(tuple)

// TypeScript also supports enums
enum INVOICE_STATUS {
    UNPAID,
    PROCESSING,
    PAID
}

console.log(INVOICE_STATUS)

// One special return type that TypeScript provides is never.
// Type never means that the function will never return any value of any type
function raiseException(message: string, code: number): never {
    throw {
        message: message,
        code: code
    }
}

raiseException('Internal server error occurred', 500)
