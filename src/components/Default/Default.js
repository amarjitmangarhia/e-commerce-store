import { Navigate, useNavigate, useParams } from "react-router-dom";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import classes from "../Default/Default.module.css"
import Footer from "../Footer/Footer";
import axios from 'axios';
import { useState, useEffect } from "react";


function Default() {

    const params = useParams();


    const [productsList, setProductsList] = useState({});


    useEffect(() => {
        const fetchProductFromAxios = async () => {
            const response = await axios.get('/api');
            const responseProduct = response.data.fetchedProducts;
            const filteredProduct = responseProduct.find((prod) => prod._id === params.id);

           console.log(filteredProduct)
    
            if (filteredProduct) {
             const product = {
                _id: filteredProduct._id,
                altTag: filteredProduct.altTag,
                header: filteredProduct.header,
                image: filteredProduct.image,
                price: filteredProduct.price,
                rating: filteredProduct.rating,
                stars: filteredProduct.stars,
                desc: filteredProduct.desc
             }

             setProductsList(product)
            }
        };
    
        fetchProductFromAxios();
      }, [params.id]);


    const printStars = () => {
        console.log()
        let totalStars = "";
        let stars = productsList.stars;

        for (let i = 0; i < stars; i++) {
            totalStars = totalStars + "*"
        }
        return totalStars;
    }

    const showButtons = () => {
        return (
            <>
                <button>Buy Now</button>
                <button>Add Cart</button>
                </>
        )
    }

    return (
        <>
            <Header />
            <Slider />

            {productsList ? 
            
             <div  className={classes.content}>
               <div className="w-full lg:w-1/2 lg:mr-8">
                        <img src={productsList.image} alt={productsList.altTag} className="w-full" />
                    </div>
                <div className={classes.productData}>
                    <h1>{productsList.header}</h1>
                    <div className={classes.price}>${productsList.price}</div>
                    <div className={classes.rating}>
                        <div className={classes.stars}>{printStars()}</div>
                        <div className={classes.ratingNumbers}>{productsList.rating}  rating</div>
                    </div>

                    <div className={classes.aboutTheItem}>
                        <h3>About this item</h3>
                        <ul>
                            {productsList.desc ? productsList.desc.map((arr) => {
                                return <li>{arr}</li>
                            }) : "No Description added yet."}
                        </ul>

                    </div>
                </div>
            </div>  : "no data"}
            <div className={classes.buttons}>
                {productsList.desc ? showButtons() : " "}
            </div> 
            <Footer />
        </>
    )
}

export default Default;