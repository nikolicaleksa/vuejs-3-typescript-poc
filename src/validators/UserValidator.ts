import { AbstractValidator } from "@/validators/AbstractValidator";
import { NewUser } from "@/types/NewUser";

export default class UserValidator extends AbstractValidator<NewUser> {
    public validate (user: NewUser): void {
        if (user.firstName.length === 0) {
            this.addError({
                field: 'firstName',
                message: 'First name is required.'
            })
        }

        if (user.lastName.length === 0) {
            this.addError({
                field: 'lastName',
                message: 'Last name is required.'
            })
        }

        if (user.email.length === 0) {
            this.addError({
                field: 'email',
                message: 'Email is required.'
            })
        }

        if (user.password.length === 0) {
            this.addError({
                field: 'password',
                message: 'Password is required.'
            })
        }
    }
}
