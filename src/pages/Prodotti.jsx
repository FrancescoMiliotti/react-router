import { useEffect } from "react"
import axios from "axios";
import NavBar from "../components/NavBar"


function Prodotti() {

    function mounted() {
        console.log("Applicazione montata correttamente");

        const apiurl = "https://fakestoreapi.com/products";

        axios.get(apiurl).then(res => {
            console.log("Ricevuti dati da API:", res.data);
        })


        
    }


    useEffect(mounted, []);

    return <div>
        <NavBar />
        <h1>Qui trovate i nostri Prodotti</h1>

    </div>
}

export default Prodotti