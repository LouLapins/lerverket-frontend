import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ICategory from '../../interfaces/ICategory'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import DropdownMenu from './DropdownMenu';

interface INavItemProps {
    category: ICategory
}

export default function NavItem(props: INavItemProps) {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleClick = () => {
        setDropDownOpen(!dropDownOpen)
    } 

    const location = useLocation();

    useEffect(() => {
        setDropDownOpen(false);
    }, [location]);

    const handleHover = () => {
        setDropDownOpen(true)
    }
    
    const downArrow = <MdKeyboardArrowDown className='dropdown-icon'/>
    const upArrow = <MdKeyboardArrowUp className='dropdown-icon'/>
    const categoryLink = <Link className='nav__item--open link' to={`/${props.category.attributes.slug}`}>{props.category.attributes.name}</Link>

    return (
        <button className='nav__item link' onClick={handleClick} onMouseOver={handleHover} onMouseLeave={() => setDropDownOpen(false)}>
            {dropDownOpen ? categoryLink : props.category.attributes.name}
            {dropDownOpen ? upArrow : downArrow}
            {dropDownOpen && <DropdownMenu category={props.category}/>}
            {dropDownOpen && <div className='nav__dropdown__background'></div>}
        </button>
    )
}
