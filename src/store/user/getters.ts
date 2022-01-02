import { GetterTree } from 'vuex'
import { UserState } from '@/types/UserState'
import { RootState } from '@/types/RootState'
import { User, UserName } from '@/types/User'

export const getters: GetterTree<UserState, RootState> = {
    getUserNames (state): UserName[] {
        return state.users.map((user: User) => {
            return {
                firstName: user.firstName,
                lastName: user.lastName
            }
        })
    }
}
