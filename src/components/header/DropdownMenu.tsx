import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import IArticle from '../../interfaces/IArticle'
import ICategory from '../../interfaces/ICategory'

interface IDropdownMenuProps {
    category: ICategory
}

export default function DropdownMenu(props: IDropdownMenuProps) {

    return (
        <ul>
            {props.category.id === "5" && <li><Link to="/konst">Konst</Link></li>}
            {props.category.attributes.articles.data.map((article: IArticle) => (
                <li key={article.id}><HashLink to={`/${props.category.attributes.slug}#${article.attributes.slug}`}>{article.attributes.title}</HashLink></li>
            ))}
        </ul>
    )
}
