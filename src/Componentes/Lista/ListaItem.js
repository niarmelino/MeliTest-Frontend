import "./ListaItem.scss";

export default function ListaItem(props) {
	return (
		<div className="ListaItem">
			<div className="ContenedorFoto">
				<div className="Foto" style={{ backgroundImage: `url(${props.Item.picture})` }} />
			</div>

			<div className="Info">
				<div className="Precio">
					$ {props.Item.price.amount} {props.Item.free_shipping ? <img className="ImgEnvio" src={process.env.PUBLIC_URL + "/ic_shipping.png"} /> : '' }
				</div>
				<div className="Titulo">
					{props.Item.title}
				</div>
			</div>

			<div className="Provincia">
				{props.Item.state}
			</div>
		</div>	
	);
}