import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';


/* La ruta del home siempre tiene que estar al final en el switch para que carguen las anteriores rutas,
a no ser que tenga el atributo exact en el componente*/

/* El componente Route es un componente contenedor */

/* Para para un parámetro a un link hay que utilizar /: */

/* Para redireccionar una página con otra dentro de la aplicación, se usa el componente <Redirect /> */

/* El uso del * de Error404 indica que cualquier ruta se va a cargar y siempre se pone al final */

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                <MenuConceptos></MenuConceptos>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/acerca" component={Acerca}></Route>
                    <Route exact path="/contacto" component={Contacto}></Route>
                    <Route exact path="/usuario/:username" component={Usuario}></Route>
                    <Route exact path="/productos" component={Productos}></Route>
                    <Route exact path="/about"><Redirect to="/acerca"></Redirect></Route>
                    <Route exact path="/contact"><Redirect to="/contacto"></Redirect></Route>
                    <Route path="*" component={Error404}></Route>
                </Switch>            
            </Router>
        </div>
    );
};

/* const ConceptosBasicos = () => {
    return (
        <div>
            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenidos al tema de las rutas en React</p>
                    </Route>
                    <Route exact path="/acerca" component={Acerca}></Route> 
                    <Route exact path="/contacto" children={<Contacto></Contacto>}></Route>
                </Switch>            
            </Router>
        </div>
    )
} */

export default ConceptosBasicos