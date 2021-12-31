import { FormError } from "@/types/FormError";

export abstract class AbstractValidator <T> {
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
