export type FormError = {
    field: string | null,
    message: string
}

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt: Date
}

export type NewUser = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
