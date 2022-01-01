<template>
    <h1>Home</h1>
    <hr class="mb-5">
    Registered users:
    <ul>
        <li
            v-for="(userName, index) in userNames"
            :key="index"
        >
            {{ userName }}
        </li>
    </ul>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent ({
    name: 'Home',
    methods: {
        ...mapGetters({
            getUserNames: 'getUserNames'
        }),
        ...mapActions({
            fetchUsers: 'fetchUsers'
        })
    },
    computed: {
        userNames (): string[] {
            return this.getUserNames()
        }
    },
    created() {
        this.fetchUsers()
    }
})
</script>
