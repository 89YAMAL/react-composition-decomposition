import React from "react";

export default function ExchangeRates(props) {
    return (
        <ul className="exchangeRates">
            {props.rates.map((item) => 
                <li className="rates">
                    <a href={item.link}>{item.currency}</a>
                    {item.rate}
                    <span>{item.change}</span>
                </li>
            
            )}
        </ul>
    )
}