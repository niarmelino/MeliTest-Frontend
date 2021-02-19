import React from "react";
import { useParams } from "react-router-dom";

export default function Detalle()
{
	let { id } = useParams();

	return (<div>
		<h2>Detalle works!</h2>
		{ id}</div>);
}