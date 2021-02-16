import "./Categoria.scss";

export default function Categoria(props) {
	var categories = [
		{
			id: "MLA1051",
			name: "Celulares y Teléfonos"
		},
		{
			id: "MLA1055",
			name: "Celulares y Smartphones"
		}
	];

	const categoryItems = categories.map((category, index) => {
		if ((index + 1) < categories.length) {
			return <li key={category.id}>
				<div>{category.name}</div>
				<div className="Separador">
					<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg>
				</div>
			</li>
		}
		else {
			return <li key={category.id}>{category.name}</li>
		}
	});

	return (
		<div className="container Categoria">
			<ul>
				{categoryItems}
			</ul>
		</div>
	);
}