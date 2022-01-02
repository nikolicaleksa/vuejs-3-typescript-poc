export interface UserName {
    firstName: string,
    lastName: string
}

export interface UserCredentials {
    email: string,
    password: string
}

export interface User extends UserName, UserCredentials {
    id: number,
    createdAt: Date
}

export interface NewUser extends UserName, UserCredentials {}

// Instead of using interfaces we could've achieved the same using type aliasing
// export type UserName = {
//     firstName: string,
//     lastName: string
// }
//
// export type UserCredentials = {
//     email: string,
//     password: string
// }
//
// export type User = {
//     id: number,
//     createdAt: Date
// } & UserName & UserCredentials
//
// export type NewUser = UserName & UserCredentials
