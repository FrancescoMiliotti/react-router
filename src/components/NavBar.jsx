import { Link, NavLink } from "react-router-dom"


function NavBar() {
    return <nav className="navbar">
        <NavLink className= "btn" to="/">HomePage</NavLink>
        <NavLink className="btn" to="/Prodotti">Elenco Prodotti</NavLink>
        <NavLink className="btn" to="/ChiSiamo">Chi Siamo</NavLink>
        <NavLink className="btn" to="/DettaglioProdotti">Dettaglio Prodotti</NavLink>
        
</nav>
}

    export default NavBar