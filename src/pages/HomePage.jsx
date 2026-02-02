import { Link, NavLink } from "react-router-dom"


function HomePage() {
    return <div>
        <h1>Benvenuti nella HomePage</h1>
        <Link className= "btn" to="/Prodotti">Vai ai Prodotti</Link>
        <Link className= "btn" to="/ChiSiamo">Vai a Chi Siamo</Link>

    </div>
}

export default HomePage