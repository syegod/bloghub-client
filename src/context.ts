import { createContext } from "react";

interface AuthContextProps{
    isAuth: boolean;
    userData: UserData | null;
    token: string | null;
    state: string;
}

interface UserData{
    _id:string;
    username: string;
    email: string;
    emailConfirmed: boolean;
    passwordHash: string;
    avatarUrl?: string;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    userData: null,
    token: null,
    state: 'loading'
});