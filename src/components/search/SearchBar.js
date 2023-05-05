import React from "react";

export default function SearchBar() {
    return (
        <div className="searchBar">
            <img src={require("../../Media/ya.png")} className="logo" />
            <div className="search">
                <form>
                    <input className="searchArea" type="search" name="search" />
                    <button className="searchButton" type="submit" name="submit">Найти</button>
                </form>
                <p>Найдется все. Например, <span>фазы луны сегодня</span></p>
            </div>
        </div>
    )
}