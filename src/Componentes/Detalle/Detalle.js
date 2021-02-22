import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Categoria from "../Categoria/Categoria";
import "./Detalle.scss";

export default function Detalle()
{
	const [categories, setCategories] = useState([]);
	const [isLoanding, setLoanding] = useState(true);
	const [item, setItem] = useState({});
	let { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:3001/api/items/${id}`)
			.then(res => res.json())
			.then((result) => {
				if (result.error) {

				}
				else {
					setCategories(result.item.categories);
					setItem(result.item);
				}

				setLoanding(false);
			}, (error) => {
					setLoanding(false);
			});
	}, []);

	return (
		<div>
		{
			isLoanding ? <div></div> : 
			<div>
				{item ?
					<div>
						<Categoria categories={categories} />

								<div className="container Lista">
									<div className="Producto">
										<div>
											<div className="Foto" style={{ backgroundImage: `url(${ item.picture })` }} />
											<div className="Info">
												<div className="Condicion">
													{item.condition == 'new' ? 'Nuevo' : 'Usuado'} - {item.sold_quantity } vendidos
												</div>
												<div className="Titulo">
													<h1>{item.title}</h1>
												</div>
												<div className="Precio">{item.price.currency} {item.price.amount}{item.price.decimals > 0 ? <sup>{item.price.decimals}</sup> : ''}
												</div>
												<div className="Comprar">
													<button className="Primario">Comprar</button>
												</div>
											</div>
										</div>

										<div className="Descripcion">
											<h3>Descripción del producto</h3>
											<p>
												{item.description}
											</p>
										</div>
									</div>

						</div>
					</div>
					:
					<div className="container Lista mt-5">
								<div className="SinDatos">
										<img className="Logo" width="250"
											src={process.env.PUBLIC_URL + "/NotFound.svg"} />

										<h4>Parece que esta página no existe</h4>
							</div>
					</div>}			
			</div>
		}
		</div>
	);
}