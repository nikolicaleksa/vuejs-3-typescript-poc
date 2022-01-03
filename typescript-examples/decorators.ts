// A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property or parameter
// They must evaluate to a function that will be called at runtime with information about the decorated declaration

// Here we define the interface of a object that we need to pass to decorator
interface ClassOptions {
    name: string,
    methods: object
}

// Here we are defining a decorator function and we're using decorator factories
// in order to customize how a decorator is applied to a declaration
// We are receiving a decorator parameter options which will contain the name and methods
function Options (options: ClassOptions) {
    return (constructor: Function) => {
        // On the received class we are adding name to prototypes
        constructor.prototype.name = options.name

        // And we are adding all functions that we received in options.methods
        for (const method of Object.values(options.methods)) {
            constructor.prototype[method.name] = method
        }
    }
}

// By writing @Options we are attaching a decorator to our class which will be called when class is declared
@Options({
    name: 'Home',
    methods: {
        alertHelloWorld () {
            alert('Hello world!')
        }
    }
})
class Home {

}

const home = new Home()

console.log(home)

// @ts-ignore
// We must use @ts-ignore so that we don't get compilation errors (this can be solved in a proper way but I wanted to keep it simple)
// Now when we console.log the name property of home variable we will get the value we provided in decorator
console.log(home.name)

// @ts-ignore
// We can also call the function we declared in the decorator
home.alertHelloWorld()
