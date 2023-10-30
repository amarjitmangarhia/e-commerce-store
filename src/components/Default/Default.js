import { useParams } from "react-router-dom";
import Slider from "../Slider";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import classes from "../Default/Default.module.css"


function Default() {

    const params = useParams();

    const product = useSelector((state) => state.products)


    let productToUse = []

    product.map((prod) => {
        if (prod.id === params.id) {
            productToUse.push(prod)
        }
    })

    const printStars = () => {
        console.log()
        let totalStars = "";
        let stars = productToUse[0].stars;

        for (let i = 0; i < stars; i++) {
            totalStars = totalStars + "*"
        }
        return totalStars;
    }

    const showButtons = () => {
        return (
            <>
                <button>Buy Now</button>
                <button>Add Cart</button></>
        )
    }

    return (
        <>
            <Header />
            <Slider />
            <div className={classes.content}>
                <div className={classes.img}>
                    <img src={productToUse[0].image} alt={productToUse[0].altTag} />
                </div>
                <div className={classes.productData}>
                    <h1>{productToUse[0].header}</h1>
                    <div className={classes.price}>${productToUse[0].price}</div>
                    <div className={classes.rating}>
                        <div className={classes.stars}>{printStars()}</div>
                        <div className={classes.ratingNumbers}>{productToUse[0].rating}  rating</div>
                    </div>

                    <div className={classes.aboutTheItem}>
                        <h3>About this item</h3>
                        <ul>
                            {productToUse[0].desc ? productToUse[0].desc.map((arr) => {
                                return <li>{arr}</li>
                            }) : "No Description added yet."}
                        </ul>

                    </div>
                </div>
            </div>
            <div className={classes.buttons}>
                {productToUse[0].desc ? showButtons() : " "}
            </div>
        </>
    )
}

export default Default;