import { useState } from "react";
import { useEffect } from "react";
import "./Categoria.scss";

export default function Categoria(props) {
	return (
		<div className="container Categoria">
			<ul className="Categoria">
				{props.categories.map((cat, i) => {
					return <>
							{i + 1 < props.categories.length ?
								<li key={cat.id}>
									<div>{cat.name}</div>
									<div className="Separador">
										<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg>
									</div>
								</li>
								:
								<li key={cat.id}>{cat.name}</li>
							}
						   </>
				})}
			</ul>
		</div>
	);
}