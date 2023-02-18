import { UserRoles } from '~/enums/auth';

export interface User {
    name: string
    firstName: string
    lastName: string
    email: string
    phone: string
    avatar: string
    website: string
    age: string
    initial: string
}

export interface AuthenticationData extends Omit<User, 'age'> {
    token: string
    code: {}
    company: string
    logo: string
    coverbackground: string
    welcomemsg: string
}

export interface LoginData {
    login: string
    password: string
}
export interface RegistrationData extends LoginData {
    name: string
    confirmPassword: string
    role: typeof UserRoles[keyof typeof UserRoles]
}
