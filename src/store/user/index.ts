import { Module } from 'vuex'
import { UserState } from '@/types/UserState'
import { RootState } from '@/types/RootState'
import { getters } from '@/store/user/getters'
import { actions } from '@/store/user/actions'
import { mutations } from '@/store/user/mutations'

const state: UserState = {
    users: []
}

export const user: Module<UserState, RootState> = {
    state,
    getters,
    actions,
    mutations
}
