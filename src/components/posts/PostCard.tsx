import React, { useContext, useState } from 'react'
import UserAvatar from '../user/UserAvatar';
import { Link } from 'react-router-dom';
import { IoMdHeart, IoMdHeartEmpty, IoIosStats } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiRepost } from "react-icons/bi";
import useTime from '../../hooks/useTime';
import axios from '../../axios';
import handleNumber from '../../handlers/handleNumber';
import { AuthContext } from '../../context';


interface PostCardProps {
  post: IPost;
}

interface IPost {
  _id: string,
  text: string,
  author: any,
  createdAt: string,
  likes: [string],
  views: [string],
  comments: [string],
  reposts: [string],
  image?: string
}

const PostCard = ({ post }: PostCardProps) => {
  const { isAuth, userData } = useContext(AuthContext);
  const [initialPost, setInitialPost] = useState<IPost>(post);
  const { author, text, createdAt, likes, views, comments, reposts, image } = initialPost;
  const { avatarUrl, username, _id } = author;
  const [isLiked, setIsLiked] = useState(likes.includes(_id));

  async function handleLike() {
    try {
      setIsLiked(!isLiked);
      const response = await axios.patch('/posts', { postId: initialPost._id });
      setInitialPost(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleOnClick() {
    console.log(initialPost);
  }

  return (
    <div className='w-full border-b hover:bg-gray-100 cursor-pointer transition' >
      <div className='flex py-2 sm:px-3 flex-row gap-3'>
        <div className='hidden sm:block'><UserAvatar src={avatarUrl} size='medium'/></div>
        <div className='w-full flex flex-col'>
          <div className='flex gap-3 justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Link to={'/'} className='font-semibold hover:underline'>{username}</Link>
              <span className='text-gray-500 text-sm'>{useTime(new Date(createdAt))}</span>
            </div>
            <div className=''>
              {(isAuth && userData?._id === _id) && <HiOutlineDotsHorizontal className='p-1 hover:bg-purple-200 hover:opacity-75 transition rounded-xl' size={25} />}
            </div>
          </div>
          <div className='w-full overflow-hidden' onClick={() => handleOnClick()}>
            {text}
          </div>
          {image &&
            <div className='w-full'>
              <img src={image} alt='post_img'/>
            </div>
          }
          <div className='w-full flex justify-between gap-3 mt-3 text-gray-500 sm:pr-5 select-none'>
            <div className='flex sm:gap-2 items-center hover:text-rose-500 transition cursor-pointer'>
              <GoComment size={20} className='' />
              <span>{handleNumber(comments.length)}</span>
            </div>
            <div className='flex sm:gap-2 items-center hover:text-teal-500 transition cursor-pointer'>
              <BiRepost size={22} className='' />
              <span>{handleNumber(reposts.length)}</span>
            </div>
            <div onClick={() => handleLike()} className={`flex sm:gap-2 items-center hover:text-purple-500 transition cursor-pointer z-10 ${isLiked && 'text-purple-500'}`}>
              {!isLiked ? <IoMdHeartEmpty size={22} /> : <IoMdHeart size={22} />}
              <span>{handleNumber(likes.length)}</span>
            </div>
            <div className='flex sm:gap-2 items-center hover:text-sky-500 transition cursor-pointer'>
              <IoIosStats size={20} className='' />
              <span>{handleNumber(views.length)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard