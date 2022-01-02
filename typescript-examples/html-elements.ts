// When working with HTML we can use the generics approach
const userInputElement = <HTMLInputElement> document.getElementById('user-input')

console.log(userInputElement.value)

// Or we can use another approach where we specifically cast a variable to specific type
const userInputElementAnotherApproach = document.getElementById('user-input')

if (userInputElementAnotherApproach !== null) {
    console.log((userInputElementAnotherApproach as HTMLInputElement).value)
}
