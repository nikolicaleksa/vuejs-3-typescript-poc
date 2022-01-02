<template>
    <h1>Sign up</h1>
    <hr class="mb-5">
    <sign-up-form
        :errors="errors"
        @register-user="registerUser"
    />
</template>

<script lang="ts">
import SignUpForm from '@/components/SignUpForm.vue'
import { FormError } from '@/types/FormError'
import { NewUser } from "@/types/User"
import UserValidator from '@/validators/UserValidator'
import { Vue, Options } from 'vue-class-component'
import { mapActions } from 'vuex'

@Options({
    name: 'SignUp',
    components: {
        SignUpForm
    },
    methods: {
        ...mapActions({
            registerUserAction: 'user/registerUser'
        })
    }
})
export default class SignUp extends Vue {
    errors = [] as FormError[]

    // Since the registerUserAction is defined in the class decorator we need to describe it here in order for TypeScript
    // to know it's usage. We are using the ! character to assert that this property is not null and not undefined
    registerUserAction!: (user: NewUser) => Promise<void>

    registerUser (user: NewUser): void {
        const userValidator = new UserValidator()
        userValidator.validate(user)

        if (!userValidator.isValid()) {
            this.errors = userValidator.errors

            return
        }

        this.registerUserAction(user)
            .then(() => {
                this.$router.push({
                    name: 'home'
                })
            })
            .catch((err: unknown) => {
                console.error(err)
            })
    }
}
</script>
