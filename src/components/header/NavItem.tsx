import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ICategory from "../../interfaces/ICategory";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";
import { motion } from "framer-motion";

interface INavItemProps {
  category: ICategory;
}

export default function NavItem(props: INavItemProps) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setDropDownOpen(false);
  }, [location]);

  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };

  const downArrow = <MdKeyboardArrowDown className="dropdown-icon" />;
  const upArrow = <MdKeyboardArrowUp className="dropdown-icon" />;
  const categoryLink = (
    <Link
      className="nav__item--open link"
      to={`/${props.category.attributes.slug}`}
    >
      {props.category.attributes.name}
    </Link>
  );

  return (
    <button
      className="nav__item link"
      onClick={() => setDropDownOpen(true)}
      onMouseOver={() => setDropDownOpen(true)}
      onMouseLeave={() => setDropDownOpen(false)}
    >
      {dropDownOpen ? categoryLink : props.category.attributes.name}
      {dropDownOpen ? upArrow : downArrow}
      {dropDownOpen && <DropdownMenu category={props.category} />}
      {dropDownOpen && (
        <motion.div
          className="nav__dropdown__background"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1, type: "tween", duration: 0.5 }}
        ></motion.div>
      )}
    </button>
  );
}
