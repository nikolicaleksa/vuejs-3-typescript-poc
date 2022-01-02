import { FormError } from '@/types/FormError'

// Here we are using generic types functionality of TypScript. You will notice the type T in class definitions <T>.
// Using this we are basically telling TypeScript "hey this class needs a type which will be used for properties and methods
// but since I don't know what it will be at the moment lets create a generic one called T"
// (accepted practice is that generic types start from the letter T and then continue with U, W...)
//
// Now that we defined a generic type we can use it in the validate method and we will get IDE auto-complication based on
// the provided object. This also gives us flexibility to implement other validators that receive different object types
export abstract class AbstractValidator<T> {
    // We add a _ in front of the private properties so that we can expose getter and setter for it with normal names
    private _errors: FormError[] = []

    public isValid (): boolean {
        return this._errors.length === 0
    }

    public get errors (): FormError[] {
        return this._errors
    }

    public addError (error: FormError): void {
        this._errors.push(error)
    }

    public abstract validate (object: T): void
}
