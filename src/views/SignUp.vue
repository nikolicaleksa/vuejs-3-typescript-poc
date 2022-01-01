<template>
    <h1>Sign up</h1>
    <hr class="mb-5">
    <sign-up-form
        :errors="errors"
        @register-user="registerUser"
    />
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import SignUpForm from '@/components/SignUpForm.vue'
import { FormError } from '@/types/FormError'
import { NewUser } from "@/types/NewUser"
import UserValidator from '@/validators/UserValidator'
import { mapActions } from 'vuex'

export default defineComponent({
    name: 'SignUp',
    components: {
        SignUpForm
    },
    data () {
        return {
            errors: [] as FormError[]
        }
    },
    methods: {
        ...mapActions({
            registerUserAction: 'registerUser'
        }),
        registerUser (user: NewUser) {
            const userValidator = new UserValidator()
            userValidator.validate(user)

            if (!userValidator.isValid()) {
                this.errors = userValidator.errors

                return
            }

            this.registerUserAction(user)
                .then(() => {
                    this.$router.push('sign-in')
                })
                .catch((err: unknown) => {
                    console.error(err)
                })
        }
    }
})
</script>
