interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

// Declare a custom type which is a union of bird and horse
type Animal = Bird | Horse

function moveAnimal (animal: Animal) {
    // Until we determined which type we are dealing with we can only access the common members of the union
    switch (animal.type) {
        case 'bird':
            console.log(`Moving with speed: ${animal.flyingSpeed}`)
            break
        case 'horse':
            console.log(`Moving with speed: ${animal.runningSpeed}`)
            break
    }
}

moveAnimal({
    type: 'bird',
    flyingSpeed: 20
})
