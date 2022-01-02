import { AbstractValidator } from '@/validators/AbstractValidator'
import { NewUser } from '@/types/NewUser'

// Here we are saying that our generic type T will actually be a type NewUser
export default class UserValidator extends AbstractValidator<NewUser> {
    public validate (user: NewUser): void {
        this.validateFirstName(user)
        this.validateLastName(user)
        this.validateEmail(user)
        this.validatePassword(user)
    }

    private validateFirstName (user: NewUser): void {
        if (user.firstName.length === 0) {
            this.addError({
                field: 'firstName',
                message: 'First name is required.'
            })
        }
    }

    private validateLastName (user: NewUser): void {
        if (user.lastName.length === 0) {
            this.addError({
                field: 'lastName',
                message: 'Last name is required.'
            })
        }
    }

    private validateEmail (user: NewUser): void {
        if (user.email.length === 0) {
            this.addError({
                field: 'email',
                message: 'Email is required.'
            })
        } else if (!user.email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)) {
            this.addError({
                field: 'email',
                message: 'Email is invalid.'
            })
        }
    }

    private validatePassword (user: NewUser): void {
        if (user.password.length === 0) {
            this.addError({
                field: 'password',
                message: 'Password is required.'
            })
        }
    }
}
