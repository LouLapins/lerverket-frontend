import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    
    const downArrow = <MdKeyboardArrowDown className='dropdown-icon'/>
    const upArrow = <MdKeyboardArrowUp className='dropdown-icon'/>
    const categoryLink = <Link className='nav__item link' to={`/${props.category.attributes.slug}`}>{props.category.attributes.name}</Link>

    return (
    <button className='nav__item link' onClick={handleClick}>
        {categoryClicked ? categoryLink : props.category.attributes.name}
        {categoryClicked ? upArrow : downArrow}
        {categoryClicked && <DropdownMenu category={props.category}/>}
    </button>
    )
}
