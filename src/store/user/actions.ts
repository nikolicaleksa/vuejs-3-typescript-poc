import { ActionTree } from 'vuex'
import { UserState } from '@/types/UserState'
import { RootState } from '@/types/RootState'
import { NewUser } from '@/types/NewUser'
import { Mutations } from '@/store/user/mutations'
import { User } from '@/types/User'
import axios, {AxiosResponse} from 'axios'

export const actions: ActionTree<UserState, RootState> = {
    async registerUser ({ commit }, user: NewUser): Promise<void> {
        axios({
            method: 'post',
            url: 'api/users',
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({...user, createdAt: new Date()})
        })
            .then((user: AxiosResponse<User>) => {
                commit(Mutations.addUser, user)
            })
            .catch((err: unknown) => {
                throw err
            })
    },
    async fetchUsers ({ commit }): Promise<void> {
        axios({
            method: 'get',
            url: 'api/users',
        })
            .then((users: AxiosResponse<User[]>) => {
                commit(Mutations.setUsers, users.data)
            })
    }
}
