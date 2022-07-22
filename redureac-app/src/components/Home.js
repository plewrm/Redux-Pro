import React from 'react'
import bike from '../components/Bike.jpg'
import cart from '../components/cart.svg'
function Home(props) {
    return (
        <div>
            <div className='add-to-cart'>

                <img src={cart}></img>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src={bike}></img>

                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Bent
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i Bent 111'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
        

    )
}

export default Home