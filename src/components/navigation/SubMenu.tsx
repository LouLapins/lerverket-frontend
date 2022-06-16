import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import IArticle from "../../interfaces/IArticle";
import ICategory from "../../interfaces/ICategory";

interface IDropdownMenuProps {
  category: ICategory;
}

export default function DropdownMenu(props: IDropdownMenuProps) {
  const bgAnimateFrom = { opacity: 0 };
  const bgAnimateTo = { opacity: 1 };

  const textAnimateFrom = { opacity: 0, y: -50 };
  const textAnimateTo = { opacity: 1, y: 0 };
  const transition = { delay: 0.1, type: "tween", duration: 0.5 };

  return (
    <motion.ul
      className="nav__dropdown no-bullet"
      initial={textAnimateFrom}
      animate={textAnimateTo}
      transition={transition}
    >
      {props.category.id === "5" && (
        <li>
          <Link className="dropdown__item link" to="/konst">
            Konst
          </Link>
        </li>
      )}
      {props.category.attributes.articles.data.map((article: IArticle) => (
        <li key={article.id}>
          <HashLink
            className="dropdown__item link"
            smooth
            to={`/${props.category.attributes.slug}#${article.attributes.slug}`}
          >
            {article.attributes.title}
          </HashLink>
        </li>
      ))}
      <motion.div
        className="nav__dropdown__background"
        initial={bgAnimateFrom}
        animate={bgAnimateTo}
        transition={transition}
      ></motion.div>
    </motion.ul>
  );
}
