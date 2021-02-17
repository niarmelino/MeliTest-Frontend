import "./ListaItem.scss";

export default function ListaItem(props) {
	return (
		<div>
			<img src={props.Item.picture} />
		</div>	
	);
}