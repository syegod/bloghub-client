import PostCard from "./PostCard"
import { test_posts } from "../../constants"
import axios from "../../axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { ImSpinner10 } from "react-icons/im";

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const { userData } = useContext(AuthContext);
    const [posts, setPosts] = useState<any>([]);
    async function getPosts() {
        try {
            setLoading(true);
            const response = await axios.get('/posts', {
                data: { userId: userData?._id }
            });
            if (response.status === 200) {
                setPosts(response.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="flex flex-col w-full">
            {posts.length > 0 && posts.map((e: any, i: number) => (
                <PostCard key={i} post={e} />
            ))}
            {loading &&
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <ImSpinner10 className="animate-spin" size={50} />
                </div>}
        </div>
    )
}

export default Feed