import "./ListaItem.scss";

export default function ListaItem(props) {
	return (
		<div className="ListaItem">
			<div className="ContenedorFoto">
				<div className="Foto" style={{ backgroundImage: `url(${props.Item.picture})` }} />
			</div>

			<div className="Info">
				<div className="Precio">
					$ { props.Item.price.amount}
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