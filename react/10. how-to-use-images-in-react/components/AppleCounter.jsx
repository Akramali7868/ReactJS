import AppleBasket from "./AppleBasket";
import Button from "./Button";
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url);
const ReftArrow = new URL("../assets/images/right-arrow.png", import.meta.url);
import AppleBasket from "./AppleBasket";
import './AppleCounter.css'

const AppleCounter = ()=>{
    return (
        <section>
            <AppleBasket appleCount={10} basketName="Basket 1"/>
            <Button imgUrl={LeftArrow}/>
            <Button imgUrl={ReftArrow}/>
            <AppleBasket appleCount={0} basketName="Basket 2"/>

        </section>
    )
}
export default AppleCounter