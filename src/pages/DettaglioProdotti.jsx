import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

function DettaglioProdotti() {

    const { id } = useParams ();
    const [dettagli , setDettagli] = useState({});

    function getData() {
        

        let apiurl = `https://fakestoreapi.com/products/${id}`;

        axios.get(apiurl).then(res => {
           
            setDettagli(res.data);

        }).catch(error => {
            console.log("Qualcosa è andato storto!:", error.message);

        })


    }

    useEffect(getData, []); 


    return <div>

        <h1>Qui trovate il dettaglio dei prodotti id {id}</h1>
        <h2>{dettagli.title}</h2>
        


    </div>
}

export default DettaglioProdotti