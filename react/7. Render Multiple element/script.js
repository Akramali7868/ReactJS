import { createRoot } from "react-dom/client";
import './style.css'

function Card(key, title, price, thumbnail, brand) {
    return (
    <div className="card" key={key}>
    <img src={thumbnail}></img>
    <div className="card-content">
    <h3>{title}</h3>
    <p>{brand}</p>
    <p><b>{price}</b></p>
    </div>
</div>
    )
}
const root = createRoot(document.getElementById("root"));

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
root.render(<div className="container">{data.products.map((product)=>{
    return Card(
        product.id,
        product.title,
        product.price,
        product.thumbnail,
        product.brand)
    })}</div>)

})




fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{

    const name =  data.products.map((name)=>{
        
            console.log(name.brand);
        
            // console.log(name.brand);

    })
    
   
})