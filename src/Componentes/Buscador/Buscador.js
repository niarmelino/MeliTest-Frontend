import React, { Component, useEffect, useState } from "react";
import "./Buscador.scss";
import { Link } from "react-router-dom";

export default function Buscador(props)
{
	const [url, setUrl] = useState("");

    const Buscar = () => {
        window.location.href = "/items?search=" + url;
    }

	return (
		<div className="Barra">
			<div className="container Buscador">
                <img className="Logo"
                    src={process.env.PUBLIC_URL + "/Logo_ML.png"} />

                <input type="text"
                    placeholder="Nunca dejes de buscar"
                    defaultValue={url}
                    onChange={(e) => setUrl(e.target.value)} />

                <a onClick={ Buscar }>
                    <img src={process.env.PUBLIC_URL + "/ic_Search.png"} />
                </a>
			</div>
		</div>
	)
}