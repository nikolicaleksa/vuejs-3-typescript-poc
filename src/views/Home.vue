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
import { mapActions, mapGetters } from 'vuex'
import { Vue, Options } from 'vue-class-component'

@Options({
    name: 'Home',
    methods: {
        ...mapGetters({
            getUserNames: 'user/getUserNames'
        }),
        ...mapActions({
            fetchUsers: 'user/fetchUsers'
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
export default class Home extends Vue {

}
</script>
