import "./Buscador.scss";

function Buscador() {
	return (
		<div className="container Buscador">
			<div className="row">
				<div className="col-1"></div>
				<div className="col-1">
					<img src={process.env.PUBLIC_URL + "/Logo_ML.png" }/>
				</div>
				<div className="col-9">
					<input type="text" placeholder="Nunca dejes de buscar" /><a><img src={process.env.PUBLIC_URL + "/ic_Search.png" } /></a>
				</div>
				<div className="col-1"></div>
			</div>
		</div>
	)
}

export default Buscador;