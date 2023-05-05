import React from "react";

export default function ListNews(props) {
    return (
        <ul className="listNews">
            {props.news.map((item) => 
                <li>
                    <img src={item.icon} alt=""></img><a href={item.link}>{item.text}</a>
                </li>
            )}
        </ul>
    )
}