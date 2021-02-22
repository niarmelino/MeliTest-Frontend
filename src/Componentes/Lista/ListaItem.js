import { Link } from "react-router-dom";
import "./ListaItem.scss";

export default function ListaItem(props) {
	return (
		<div className="ListaItem">
			<div className="ContenedorFoto">
				<div className="Foto" style={{ backgroundImage: `url(${props.Item.picture})` }} />
			</div>

			<div className="Info">
				<div className="Precio">
					{props.Item.price.currency} {props.Item.price.amount}<sup>{props.Item.price.decimals}</sup>
				</div>
				<div className="Titulo">
					<Link to={'/items/' + props.Item.id }>{props.Item.title}</Link>
				</div>
			</div>

			<div className="Provincia">
				{props.Item.state}
			</div>
		</div>	
	);
}