import React, { useState } from 'react'
import CustomTextArea from '../components/inputs/CustomTextArea'
import { tags } from '../constants';
import Tag from '../components/btns/Tag';
import CustomSelect from '../components/inputs/CustomSelect';
import { Combobox } from '@headlessui/react';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagQuery, setTagQuery] = useState('');

    async function onSubmit(){
        console.log({title, text, selectedTags});
    }

    return (
        <form className='flex flex-col gap-10 mt-10 items-center'>
            <span className='font-bold text-3xl'>Add new post</span>
            <div className='flex flex-col gap-3 w-full'>
                <CustomTextArea maxLength={100} textStyles='font-semibold text-xl' placeholder='Enter some text here...' id='title' styles='sm:max-w-[100ch]' onChange={setTitle}/>
            </div>
            <Combobox value={selectedTags} onChange={setSelectedTags}>
                {selectedTags.length > 0 && (
                    <ul>
                        {tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                )}
                <Combobox.Input />
                <Combobox.Options>
                    {tags.map((tag) => (
                        <Combobox.Option key={tag} value={tag}>
                            {tag}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </form>
    )
}

export default AddPost