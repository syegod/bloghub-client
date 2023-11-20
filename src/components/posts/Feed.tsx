import PostCard from "./PostCard"
import { test_posts } from "../../constants"
import axios from "../../axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import MakePost from "./MakePost"
import { ImSpinner10 } from "react-icons/im";
import { usePostsContext } from "../../contexts/PostContext";
import { IPost } from "../../types";

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const {updateValue, posts} = usePostsContext();
    const { userData } = useContext(AuthContext);
    async function getPosts() {
        try {
            setLoading(true);
            const response = await axios.get('/posts');
            if (response.status === 200) {
                updateValue(response.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getPosts();
        console.log(posts);
    }, []);

    return (
        <div className="flex flex-col w-full">
            <MakePost />
            {posts!.length > 0 && posts?.map((e: any, i: number) => (
                <PostCard deletePost={() => console.log('1')} key={e._id} post={e} />
            ))}
            {loading &&
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <ImSpinner10 className="animate-spin" size={50} />
                </div>}
        </div>
    )
}

export default Feed