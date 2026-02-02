import { Link, NavLink } from "react-router-dom"


function NavBar() {
    return <div>
        <NavLink className="btn" to="/Prodotti">Vai ai Prodotti</NavLink>
        <NavLink className="btn" to="/ChiSiamo">Vai a Chi Siamo</NavLink>
        <NavLink className= "btn" to="/">Vai alla HomePage</NavLink>
</div>
}

    export default NavBar