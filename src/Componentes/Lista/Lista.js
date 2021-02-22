import React, { useEffect, useState } from "react";
import "./Lista.scss";
import ListaItem from "./ListaItem";
import Categoria from "../Categoria/Categoria";
import { useLocation } from "react-router-dom";

export default function Lista()
{
	const [categories, setCategories] = useState([]);
	const [items, setItems] = useState([]);
	const [isLoanding, setLoanding] = useState(true);

	let search = new URLSearchParams(useLocation().search).get("search");

	useEffect(() => {
		fetch(`http://localhost:3001/api/items?q=${search}`)
			.then(res => res.json())
			.then((result) => {
				setLoanding(false);
				setCategories(result.categories);
				setItems(result.items);
			});
	}, []);

	return (
		<div>
			{isLoanding ? <div></div> :
				<div>
					{items.length > 0 ?
						<div>
							<Categoria categories={categories} />

							<div className="container Lista">
								{items.map(item => <ListaItem key={item.id} Item={item} />)}
							</div>
						</div>
						:
						<div className="container Lista mt-5">
							<div className="SinDatos">
								<div className="Imagen">
									<img className="Logo" width="80"
										src={process.env.PUBLIC_URL + "/NoSearchResult.svg"} />
								</div>

								<div className="Texto">
									<h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
									<ul>
										<li><strong>Revisá la ortografía</strong> de la palabra.</li>
										<li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
									</ul>
								</div>
							</div>
						</div>
					}
				</div>}
		</div>
	);
}