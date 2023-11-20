import React, { createContext, useContext, useState } from "react";
import { IPost, PostsContextProps } from "../types";

const PostsContext = createContext<PostsContextProps>({
    posts: [],
    updateValue: () => {}
});

const PostsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, updateValue] = useState<IPost[]>([]);

    return (
        <PostsContext.Provider value={{ posts, updateValue }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostsContext = () => {
    return useContext(PostsContext);
};

export default PostsContextProvider;