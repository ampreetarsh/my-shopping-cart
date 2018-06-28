import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CartList extends Component{
    //rendering the itmes on the main page
    render(){
        return (
           <div className="items">
           <Link className="fas fa-shopping-cart" to = "/cart" 
            > Items ={this.props.addProduct.length}
                </Link>
                {this.props.cartItems.map((item)=>(
                  <div key={item.name}>
                  <div><h2>{item.name}</h2></div>
                  <img src={item.img} />
                  <div><strong>Price</strong> ${item.price}</div>
                  <div className="des">{item.description}</div>
                  <button onClick={()=>this.props.buy(item)}>Add To Cart</button>
                  </div>
                ))}
            </div>
        )
    }
}

export default CartList