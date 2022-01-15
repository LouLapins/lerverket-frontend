import React, { useState } from 'react'
import ICategory from '../../interfaces/ICategory'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import DropdownMenu from './DropdownMenu';

interface INavItemProps {
    category: ICategory
}

export default function NavItem(props: INavItemProps) {

    const [categoryClicked, setCategoryClicked] = useState(false);

    const handleClick = () => {
        setCategoryClicked(!categoryClicked)
    } 
    
    const downArrow = <MdKeyboardArrowDown/>
    const upArrow = <MdKeyboardArrowUp/>

    return (
        <li>
            <button onClick={handleClick}>
                {props.category.attributes.name}
                {categoryClicked ? upArrow : downArrow}

                {categoryClicked && <DropdownMenu category={props.category}/>}
            </button>
        </li>
    )
}
