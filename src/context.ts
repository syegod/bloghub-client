import { createContext } from "react";
import { AuthContextProps, PostsContextProps } from "./types";


export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    userData: null,
    token: null,
    state: 'loading'
});

export const PostsContext = createContext<PostsContextProps>({
    posts: null,
    state: 'loading'
});