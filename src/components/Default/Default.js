import { useParams } from "react-router-dom";
import Slider from "../Slider";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import classes from "../Default/Default.module.css"
import stars from "../../img/star.png"


function Default() {

    const params = useParams();

    const product = useSelector((state) => state.products)


    let productToUse = []

    product.map((prod) => {

        if (prod.id === params.id) {
            productToUse.push(prod)
        }

    })

   

    return (
        <>
            <Header />
            <Slider />
            <div className={classes.content}>
                <div className={classes.img}>
                    <img style={{ width: "400px" }} src={productToUse[0].image} alt={productToUse[0].altTag} />
                </div>
                <div className={classes.productData}>
                    <h1>{productToUse[0].header}</h1>
                    <div className={classes.price}>${productToUse[0].price}</div>
                    <div className={classes.rating}>
                        <div style={{ width: "70px" }} className={classes.stars}><img src={stars} alt="ratings" /></div>
                        <div className={classes.ratingNumbers}>{productToUse[0].rating} rating</div>
                    </div>

                    <table className={classes.table}>
                        <tr>
                            <th>Brand</th>
                            <td>Asus</td>
                        </tr>
                        <tr>
                            <th>CPU socket</th>
                            <td>Socket AM4</td>
                        </tr>
                        <tr>
                            <th>Compatible devices</th>
                            <td>Personal Computer</td>
                        </tr>
                        <tr>
                            <th>RAM memory technology</th>
                            <td>DDR4</td>
                        </tr>
                        <tr>
                            <th>Compatible processors</th>
                            <td>AMD 3rd Generation Ryzen</td>
                        </tr>
                        <tr>
                            <th>Chipset type</th>
                            <td>AMD A520</td>
                        </tr>
                        <tr>
                            <th>Memory clock speed</th>
                            <td>4400 MHz</td>
                        </tr>
                    </table>

                    <div className={classes.aboutTheItem}>
                        <h3>About this item</h3>
                        <ul>
                            <li>AMD AM4 Socket: Design for 3rd Gen AMD Ryzen and 3rd Gen AMD Ryzen with Radeon Graphics Processors</li>
                            <li>Comprehensive cooling: VRM heatsink, PCH heatsink, and Fan Xpert 2+</li>
                            <li>Fast Connectivity: 32Gbps M.2 slot, 1Gb Ethernet, USB 3.2 Gen 1 Type-A ports, plus HDMI 2.1 4K@60HZ, D-Sub, and DP outputs</li>
                            <li>ASUS CSM motherboard: ASUS Corporate Stable Model with up to 36-month supply, EOL notice, and ECN control</li>
                            <li>ASUS Control Center Express(ACCE) to make IT endpoint management simpler</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.buttons}>
                <button>Buy Now</button>
                <button>Add Cart</button>
            </div>
        </>
    )
}

export default Default;