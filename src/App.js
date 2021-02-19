import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Inicio from "./Componentes/Inicio/Inicio";
import Buscador from "./Componentes/Buscador/Buscador";
import Lista from "./Componentes/Lista/Lista";
import Detalle from "./Componentes/Detalle/Detalle";

export default function App()
{
    return (
        <Router>
            <div>
                <Buscador />
                
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route exact path="/items">
                        <Lista />
                    </Route>
                    <Route path="/items/:id">
                        <Detalle />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}