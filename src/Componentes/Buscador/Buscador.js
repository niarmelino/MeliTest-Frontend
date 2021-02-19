import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Buscador.scss";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Buscador(props)
{
    const [url, setUrl] = useState("");
    const txtBuscador = useRef(null);
    const Parametros = useQuery();

    const Buscar = () => {
        window.location.href = "/items?search=" + url;
    }

    const onKeyUp = (evento) => {
        console.log(evento);
        if (evento.code === "Enter") {
            Buscar();
		}
	}

    useEffect(() => {
        txtBuscador.current.value = Parametros.get("search");
        txtBuscador.current.focus();
    }, []);

	return (
		<div className="Barra">
			<div className="container Buscador">
                <img className="Logo"
                    src={process.env.PUBLIC_URL + "/Logo_ML.png"} />

                <input type="text"
                    placeholder="Nunca dejes de buscar"
                    defaultValue={url}
                    onChange={(e) => setUrl(e.target.value)}
                    ref={txtBuscador}
                    onKeyUp={(e) => onKeyUp(e) }
                />

                <a onClick={ Buscar }>
                    <img src={process.env.PUBLIC_URL + "/ic_Search.png"} />
                </a>
			</div>
		</div>
	)
}