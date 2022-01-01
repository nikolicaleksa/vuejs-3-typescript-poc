import { GetterTree } from 'vuex'
import { UserState } from '@/types/UserState'
import { RootState } from '@/types/RootState'
import { User } from '@/types/User'

export const getters: GetterTree<UserState, RootState> = {
    getUserNames (state): string[] {
        return state.users.map((user: User) => {
            return `${user.firstName} ${user.lastName}`
        })
    }
}
