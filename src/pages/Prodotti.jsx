import { useEffect, useState } from "react"
import axios from "axios";



function Prodotti() {

    const [products, setProduct] = useState([]);

    function mounted() {
        console.log("Applicazione montata correttamente");


        const apiurl = "https://fakestoreapi.com/products";

        axios.get(apiurl).then(res => {
            console.log("Ricevuti dati da API:", res.data);
            setProduct(res.data);

        }).catch(error => {
            console.log("Qualcosa è andato storto!:", error.message);

        })


    }

    useEffect(mounted, []);

    return (
        <div>
            

            <h1>Qui trovate i nostri Prodotti</h1>
            <div className="flex-container flex-wrap gap-1">
                {products.map((product,i) =>
                    <div className="card" key={i}>
                        {product.title}
                        <img src={product.image} className="image" />
                        <p>{product.description}</p>
                    </div>)}

            </div>

        </div>
    )
}

export default Prodotti





/*<div>
            <h1>Hello React World</h1>

            <h2>Attrici / Attori</h2>
            <div className="flex-container flex-wrap gap-1">
                {fullList.map((attrice, i) =>
                    <div className="card" key={i}>
                        <img src={attrice.image} className="image" />
                        <h3>{i + 1}. {attrice.name}</h3>
                        <p>{attrice.birth_year} - {attrice.nationality}</p>
                        <p>{attrice.biography}</p>
                        <p>Premi: {getPremi(attrice.awards)}</p>
                        <div>Film famosi: {getMovies(attrice)}</div>
                    </div>
                )}
            </div>

        </div>*/