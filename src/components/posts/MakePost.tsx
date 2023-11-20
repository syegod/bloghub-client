import React, { useContext, useState } from 'react';
import UserAvatar from '../user/UserAvatar';
import CustomTextArea from '../inputs/CustomTextArea';
import { AuthContext } from '../../context';
import { MdGif, MdOutlineEmojiEmotions } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import CustomBtn from '../inputs/CustomBtn';
import axios from '../../axios';
import dataURLtoFile from '../../handlers/dataURLToFile';
import ImgPreview from './ImgPreview';

const MakePost = ({addPost}:{addPost: (post:any)=>void}) => {
    const { userData, isAuth } = useContext(AuthContext);
    const formData = new FormData();
    const [image, setImage] = useState<any>(null);
    const [imageName, setImageName] = useState<string | null>(null);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState(false);

    async function handleOnSubmit(e: any) {
        e.preventDefault();
        try {
            setLoading(true);
            if (image && imageName) {
                formData.append('image', dataURLtoFile(image, imageName));
                formData.append('file_name', imageName!);
            }
            formData.append('text', text);
            const response = await axios.post('/posts', formData);
            console.log(response);
            if(response.status === 201){
                addPost(response.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
            console.log(formData);
            e.target.reset();
        }
    }

    async function handleImg(e: any) {
        const file = e.target?.files[0];
        if (file) {
            setImageName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    async function handleRemoveImg() {
        const fileInput: any = document.getElementById('imgs');
        setImage(null);
        setImageName(null);
        fileInput.value = '';
    }


    if (isAuth) {
        return (
            <form className='w-full border-b py-2 sm:py-5 sm:px-3' onSubmit={e => handleOnSubmit(e)}>
                <div className='flex flex-row gap-3'>
                    <div className='sm:py-2'>
                        <UserAvatar size='medium' src={userData?.avatarUrl} />
                    </div>
                    <div className='flex flex-col gap-3 items-start w-full'>
                        <CustomTextArea disabled={loading} id='post_text' maxLength={300}
                            placeholder="What's happening?" onChange={setText} />
                        {image && <ImgPreview image={image} handleRemove={handleRemoveImg} />}
                        <div className='flex flex-row justify-between w-full gap-3'>
                            <div className='flex flex-row gap-2 items-center'>
                                <CiImageOn size={30} className='cursor-pointer p-1 hover:bg-gray-200 rounded-xl transition' onClick={() => { document.getElementById('imgs')?.click() }} />
                                <input type="file" className='hidden' name='image' id='imgs' multiple={false} accept='image/*' onChange={e => handleImg(e)} />
                                <MdGif size={30} className='cursor-pointer p-1 hover:bg-gray-200 rounded-xl transition' />
                                <MdOutlineEmojiEmotions size={30} className='cursor-pointer p-1 hover:bg-gray-200 rounded-xl transition' />
                            </div>
                            <CustomBtn fullRounded disabled={loading || (text.length === 0 && !image)} text='Post' type='submit' containerStyles='bg-purple-600 hover:bg-purple-500' />
                        </div>
                    </div>
                </div>
            </form>
        )
    } else {
        return (
            <></>
        )
    }


}

export default MakePost