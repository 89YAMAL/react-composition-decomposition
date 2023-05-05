import React from "react";

export default function FilterNews(props) {
    const {selected, onSelect} = props;
    const filters = [
        {link: '#', name: "Сейчас в СМИ"},
        {link: '#', name: "в России"},
        {link: '#', name: "Рекомендуем"}
    ];

    return (
        <ul className="filterNews">
            {filters.map((item) => 
                <li className={selected === item.name ? "filter active" : "filter"} onSelect={onSelect}><a href={item.link}>{item.name}</a></li>
            )}
        </ul>

    )

}