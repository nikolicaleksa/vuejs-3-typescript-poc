// Generics in TypeScript allow us to write components that are capable of working on the data of today as well as the data of tomorrow
// That gives us the most flexible capabilities for building up large software systems.

// Without generics, we would either have to give the identity function a specific type
function identity (arg: number): number {
    return arg;
}

console.log(identity(3))

// Or we could describe the identity function using the any type
function identity2 (arg: any): any {
    return arg;
}

console.log(identity2('Test'))

// But using any is not good. If we've used any we would be losing the information about what that type was when the function returns
// If we passed in a number, the only information we have is that any type could be returned
// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned
function identity3 <T> (arg: T): T {
    return arg;
}

// Now when we are using generics we know that if we provided a string as the input we will get a string as the return type
const result = identity3('Test')

console.log(result)

// And if we provided a number we will get a number back
const result2 = identity3(3)

console.log(result2)
