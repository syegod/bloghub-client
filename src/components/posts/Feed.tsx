import PostCard from "./PostCard"
import { test_posts } from "../../constants"
import axios from "../../axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import MakePost from "./MakePost"
import { ImSpinner10 } from "react-icons/im";

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const { userData } = useContext(AuthContext);
    const [posts, setPosts] = useState<any>([]);
    async function getPosts() {
        try {
            setLoading(true);
            const response = await axios.get('/posts');
            if (response.status === 200) {
                setPosts(response.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    function addPost(post: any) {
        setPosts((prev:[]) => [...prev, post]);
    }

    function editPost(post: any) {

    }

    // function deletePost(id: string) {
    //     setPosts((prevPosts:[]) => prevPosts.filter((e: any) => e._id !== id));
    // }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="flex flex-col w-full">
            <MakePost addPost={addPost}/>
            {posts.length > 0 && posts.map((e: any, i: number) => (
                <PostCard deletePost={() => console.log('1')} key={i} post={e} />
            ))}
            {loading &&
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <ImSpinner10 className="animate-spin" size={50} />
                </div>}
        </div>
    )
}

export default Feed