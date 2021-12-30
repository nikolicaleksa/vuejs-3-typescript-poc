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
import { FormError, NewUser } from '@/types'
import axios from 'axios'

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
        registerUser (user: NewUser) {
            if (!this.validateUser(user)) {
                return
            }

            axios({
                method: 'post',
                url: 'api/users',
                headers: {
                    'content-type': 'application/json',
                },
                data: JSON.stringify({...user, createdAt: new Date()})
            })
                .then(() => {
                    this.$router.push('sign-in')
                })
                .catch((err) => {
                    this.errors.push({
                        field: 'response',
                        message: err
                    })
                })
        },
        validateUser (user: NewUser) {
            this.errors = []

            if (user.firstName.length === 0) {
                this.errors.push({
                    field: 'firstName',
                    message: 'First name is required.'
                })
            }

            if (user.lastName.length === 0) {
                this.errors.push({
                    field: 'lastName',
                    message: 'Last name is required.'
                })
            }

            if (user.email.length === 0) {
                this.errors.push({
                    field: 'email',
                    message: 'Email is required.'
                })
            }

            if (user.password.length === 0) {
                this.errors.push({
                    field: 'password',
                    message: 'Password is required.'
                })
            }

            return this.errors.length === 0
        }
    }
})
</script>
