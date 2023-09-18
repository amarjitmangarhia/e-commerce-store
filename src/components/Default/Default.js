import { useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";
import Header from "../Header/Header";


function Default() {

    const params = useParams();

    const product = useSelector((state) => state.products)

    let productToUse = []

    product.map((prod) => {

        if(prod.id === params.id) {
            productToUse.push(prod)
            console.log(productToUse[0])
        }
        
    })

    return (
        <>
        <Header />
        <Slider />
        <h1>{productToUse[0].header}</h1>
        <img style={{width: "400px"}} src={productToUse[0].image} alt={productToUse[0].altTag} />
        </>
    )
}

export default  Default;