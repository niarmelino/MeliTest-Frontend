import React, { Component } from "react";
import "./Lista.scss";
import ListaItem from "./ListaItem";
import Categoria from "../Categoria/Categoria";
import { useLocation, useParams } from "react-router-dom";

export default function Lista()
{
	let search = new URLSearchParams(useLocation().search).get("search");

	fetch(`http://localhost:3001/api/items?q=${search}`)
		.then(res => res.json())
		.then((result) => {
			console.log(result)
		});

	let Items = [
		{
			id: "MLA818137870",
			title: "Bicicleta Mtb Kuwara New Onna Dama Rodado 26",
			price: {
				currency: "ARS",
				amount: 39999,
				decimals: 0
			},
			picture: "https://http2.mlstatic.com/D_NQ_NP_847811-MLA42259756134_062020-V.webp",
			condition: "new",
			free_shipping: true,
			state: "Capital Federal"
		},
		{
			id: "MLA739946584",
			title: "Bicicleta Nordic X1.0 By Slp R29 Shim. 21v Disco Susp+linga",
			price: {
				currency: "ARS",
				amount: 37599.06,
				decimals: 0
			},
			picture: "https://http2.mlstatic.com/D_NQ_NP_857146-MLA41936933285_052020-V.webp",
			condition: "new",
			free_shipping: true,
			state: "Buenos Aires"
		},
		{
			id: "MLA605155761",
			title: "Bicicleta Mountain Bike Rodado 29 Slp 5 - Cambios Shimano Frenos A Disco Llantas Doble Pared Suspension Nueva Happy Buy",
			price: {
				currency: "ARS",
				amount: 50969,
				decimals: 0
			},
			picture: "https://http2.mlstatic.com/D_NQ_NP_970903-MLA44912313194_022021-V.webp",
			condition: "new",
			free_shipping: true,
			state: "Capital Federal"
		},
		{
			id: "MLA855887134",
			title: "Bicicleta Todo Terreno Fire Bird Doble Suspension R26",
			price: {
				currency: "ARS",
				amount: 34900,
				decimals: 0
			},
			picture: "https://http2.mlstatic.com/D_NQ_NP_804901-MLA44824632311_022021-V.webp",
			condition: "new",
			free_shipping: true,
			state: "Buenos Aires"
		}
	];

	return (
		<>
			<Categoria />

			<div className="container Lista">
				{ Items.map(item => <ListaItem Item={ item } />) }
			</div>
		</>
	);
}