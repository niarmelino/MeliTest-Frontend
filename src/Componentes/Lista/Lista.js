import React, { Component } from "react";
import "./Lista.scss";
import ListaItem from "./ListaItem";

export default class Lista extends Component
{
	constructor(props) {
		super(props);

		this.state = {
			Items: [
				{
					id: "MLA904399939",
					title: "Nokia 23 M 32 Gb Gris Carbón 2 Gb Ram",
					price: {
						currency: "ARS",
						amount: 16999,
						decimals: 0
					},
					picture: "http://http2.mlstatic.com/D_828063-MLA44280741156_122020-I.jpg",
					condition: "new",
					free_shipping: true
				},
				{
					id: "MLA898423182",
					title: "LG K50 32 Gb Aurora Black 3 Gb Ram",
					price: {
						currency: "ARS",
						amount: 20999,
						decimals: 0
					},
					picture: "http://http2.mlstatic.com/D_956213-MLA40025451632_122019-I.jpg",
					condition: "new",
					free_shipping: true
				},
				{
					id: "MLA885089576",
					title: "Motorola One Fusion 128 Gb Emerald Green 4 Gb Ram",
					price: {
						currency: "ARS",
						amount: 29999,
						decimals: 0
					},
					picture: "http://http2.mlstatic.com/D_886106-MLA43751372527_102020-I.jpg",
					condition: "new",
					free_shipping: true
				},
				{
					id: "MLA879201127",
					title: "Samsung Galaxy A31 64 Gb Prism Crush Black 4 Gb Ram",
					price: {
						currency: "ARS",
						amount: 39999,
						decimals: 0
					},
					picture: "http://http2.mlstatic.com/D_679439-MLA44516197276_012021-I.jpg",
					condition: "new",
					free_shipping: true
				}
			]
		};
	}

	render() {
		return (
			<div className="container Lista">
				{ this.state.Items.map(item => <ListaItem Item={ item } />) }
			</div>
		);
	}
}