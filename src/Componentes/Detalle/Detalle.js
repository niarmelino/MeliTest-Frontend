import React from "react";
import { useParams } from "react-router-dom";
import Categoria from "../Categoria/Categoria";

export default function Detalle()
{
	let { id } = useParams();

	return (
		<>
			<Categoria />

			<div className="container Lista">
		<h2>Detalle works!</h2>
				{id}

			</div>
		</>
	);
}