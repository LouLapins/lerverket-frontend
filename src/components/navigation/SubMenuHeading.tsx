import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from '../../hooks/common'
import ICategory from "../../interfaces/ICategory";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SubMenu from "./SubMenu";

interface INavItemProps {
  category: ICategory;
}

export default function NavItem(props: INavItemProps) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setDropDownOpen(false);
  }, [location]);

  const dropDown = useRef<HTMLButtonElement | null>(null);
  useOnClickOutside(dropDown, () => setDropDownOpen(false))

  const downArrow = <MdKeyboardArrowDown className="dropdown-icon" />;
  const upArrow = <MdKeyboardArrowUp className="dropdown-icon" />;
  const categoryName = props.category.attributes.name;

  return (
    <>
    <button
      className="nav__item link"
      ref={dropDown}
      onClick={() => setDropDownOpen((prev) => !prev)}
    >
      {categoryName}
      {dropDownOpen ? upArrow : downArrow}
    </button>
    {dropDownOpen && <SubMenu category={props.category}/>}
    </>
  );
}
