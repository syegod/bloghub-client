import Feed from "../components/posts/Feed"
import MakePost from "../components/posts/MakePost"



const MainPage = () => {


  return (
    <div className='w-full flex flex-col'>
      <MakePost />
      <Feed />
    </div>
  )
}

export default MainPage