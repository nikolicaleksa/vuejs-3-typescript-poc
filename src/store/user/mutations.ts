import { MutationTree } from 'vuex'
import { UserState } from '@/types/UserState'
import { User } from '@/types/User'

export enum Mutations {
    addUser = 'addUser',
    setUsers = 'setUsers'
}

export const mutations: MutationTree<UserState> = {
    [Mutations.addUser] (state, user: User): void {
        state.users.push(user)
    },
    [Mutations.setUsers] (state, users: User[]): void {
        state.users = users
    }
}
