import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Cart extends Component{
    render(){
        // displays the cart items on other page
        return(
            <div>
                <Link to="/">Go Back To Home Page</Link>
            <div className= {this.props.selectProduct.length==0 ?"emptyCart":"fullCart"}></div>
                 {this.props.selectProduct.map((item)=>(
                    <div className="fullCart" key={item.id}>
                    <div ><h2>{item.name}</h2></div>
                    <img src={item.img} />
                    <div><strong>Price</strong> ${item.price}</div>
                    <div className="des">{item.description}</div>
                    <div> Quantity{this.props.selectProduct.length}</div>
                    <button onClick={()=>this.props.removeI(item)}>Remove Item</button>
                    <h2>Your Total ={}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default Cart