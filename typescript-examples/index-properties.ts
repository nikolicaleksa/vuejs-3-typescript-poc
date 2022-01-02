// In some scenarios we don't know which properties will our type have and in those cases we can use index properties
// With index properties all we have to do is define the type of the property that we will have and it's value type
interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    username: 'Username is required.',
    email: 'Email is invalid.'
}

console.log(errorBag)
