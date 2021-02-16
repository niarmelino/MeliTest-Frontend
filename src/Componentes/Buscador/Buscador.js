import "./Buscador.scss";

export default function Buscador(props) {
	return (
		<div className="Barra">
			<div className="container Buscador">
				<img className="Logo" src={process.env.PUBLIC_URL + "/Logo_ML.png"} /><input type="text" placeholder="Nunca dejes de buscar" /><a><img src={process.env.PUBLIC_URL + "/ic_Search.png" } /></a>
			</div>
		</div>
	)
}