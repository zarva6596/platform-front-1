import { UserRoles } from '~/enums/auth';

export interface AuthData {
    access_token: string
    refresh_token: string
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
