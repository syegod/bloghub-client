import React, { useState } from 'react'
import CustomInput from './CustomInput';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

interface CustomSelectProps {
    items: Object[];
    Element: React.ElementType;
    id: string;
    placeholder?: string;
}

const CustomSelect = ({ items, Element, id, placeholder }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    var myInputElement = document.getElementById(id);

    myInputElement?.addEventListener('focus', function () {
        setIsOpen(true);
    });

    function handleSelect() {

    }

    function filterItems(e: any) {
        setIsOpen(true);
        setFilteredItems(prev => {
            return items.filter(i => String(i).toLowerCase().includes(e));
        })
    }

    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='relative'>
                <CustomInput placeholder={placeholder} type='text' id={id} onChange={filterItems} />
                {selected.length > 0 &&
                    <div className='flex flex-row'>
                        {selected.map((e, i) => (
                            <Element key={i} onClick={handleSelect}>{e}</Element>
                        ))}
                    </div>
                }
                <button className='absolute right-1 bottom-1 w-max h-max' type='button' onClick={() => setIsOpen(prev => !prev)}>
                    {isOpen ?
                        <MdExpandLess size={20} />
                        :
                        <MdExpandMore size={20} />}
                </button>
            </div>
            <div className='relative bg-black w-full' id='test'>
                {isOpen &&
                    <div className='flex flex-wrap gap-2 w-full absolute inset-0'>
                        {filteredItems.map((e, i) => (
                            <Element key={i} onClick={handleSelect}>{e}</Element>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default CustomSelect