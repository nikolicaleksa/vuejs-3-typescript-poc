type Combinable = string | number

// In order to achieve function type overloading all we need to do is write all the available signatures
function combine (a: string, b: number): string
function combine (a: number, b: string): string
function combine (a: string, b: string): string
function combine (a: number, b: number): number
function combine (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }

    return a + b
}

// After we've done that we can call this function any way we like and we won't get any compile errors
console.log(combine(1, 2))
console.log(combine(1, '2'))
console.log(combine('1', 2))
console.log(combine('1', '2'))
