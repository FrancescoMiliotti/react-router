import { Link, NavLink } from "react-router-dom"


function NavBar() {
    return <nav className="navbar">
        <h1>My Site</h1>
        <nav>
            <NavLink className="btn" to="/">HomePage</NavLink>
            <NavLink className="btn" to="/Prodotti">Elenco Prodotti</NavLink>
            <NavLink className="btn" to="/ChiSiamo">Chi Siamo</NavLink>
            
        </nav>

    </nav>
}

export default NavBar