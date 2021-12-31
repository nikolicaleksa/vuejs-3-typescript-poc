<template>
    <b-form
        @submit="registerUser"
        novalidate
    >
        <b-form-group
            label="First name:"
            label-for="first_name"
        >
            <b-form-input
                id="first_name"
                v-model="user.firstName"
                type="text"
                placeholder="Enter first name"
                :state="isValid('firstName')"
            />
            <b-form-invalid-feedback
                v-if="!isValid('firstName')"
                :state="false"
            >
                {{ errorMessage('firstName') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            label="Last name:"
            label-for="last_name"
        >
            <b-form-input
                id="last_name"
                v-model="user.lastName"
                type="text"
                placeholder="Enter last name"
                :state="isValid('lastName')"
            />
            <b-form-invalid-feedback
                v-if="!isValid('lastName')"
                :state="false"
            >
                {{ errorMessage('lastName') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            label="Email:"
            label-for="email"
        >
            <b-form-input
                id="email"
                v-model="user.email"
                type="email"
                placeholder="Enter email"
                :state="isValid('email')"
            />
            <b-form-invalid-feedback
                v-if="!isValid('email')"
                :state="false"
            >
                {{ errorMessage('email') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
            label="Password:"
            label-for="password"
        >
            <b-form-input
                id="password"
                v-model="user.password"
                type="password"
                placeholder="Enter password"
                :state="isValid('password')"
            />
            <b-form-invalid-feedback
                v-if="!isValid('password')"
                :state="false"
            >
                {{ errorMessage('password') }}
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>

        <div
            v-if="!isValid('response')"
            class="alert-danger"
        >
            {{ errorMessage('response') }}
        </div>
    </b-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FormError } from '@/types/FormError'
import { NewUser } from '@/types/NewUser'

export default defineComponent({
    name: 'SignUpForm',
    props: {
        errors: {
            type: Object as () => FormError[],
            default: () => {
                return Object as () => []
            }
        }
    },
    emits: ['register-user'],
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            } as NewUser
        }
    },
    methods: {
        registerUser () {
            this.$emit('register-user', this.user)
        },
        isValid (field: string) {
            if (this.errors?.length === 0) {
                return null
            }

            return this.errors.find((element: FormError) => element.field === field) === undefined
        },
        errorMessage (field: string) {
            return this.errors.find((element: FormError) => element.field === field)?.message
        }
    }
})
</script>
