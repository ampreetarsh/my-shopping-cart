import React, { Component } from 'react';
import CartList from './CartList';
import Cart from './Cart'
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  state={
    //items array
    cartItems:[
      {
        id:1,
        total:0,
        quantity: 1,
        name: "Butter",
        price: 4.35,
        description: "Ideal for sandwiches, baking or cooking, dailyland’s salted butter is churned to rich, creamy perfection, making a must for every fridge. Pure and with a very clean taste, it’s a delicious addition to the food you make.",
        img: "https://i5.walmartimages.ca/images/Large/r_4/54g/999999-30907734_SaltedButter_454g.jpg?odnBound=460"
    },
    {
        id:2,
        total:0,
        quantity: 1,
        name: "Milk",
        price: 5.50,
        description: "Fresh, wholesome milk… naturally from Dairyland.  Since 1914, Dairyland has stood for high quality dairy products. Dairyland 2% Milk has always been committed to using the best ingredients, people and processes to produce great tasting quality milk you can depend on. Dairyland 3.25% homogenized milk, 2%, 1% and skim milk are available in many formats such as 250mL, 500mL, 1L and 2L cartons; and 1L, 2L, 4L jugs and 4L bags.",
        img: "http://www.dairyland.ca/en/url(/-/media/Ecosystem/Divisions/Canada-Dairy/Sites/Dairyland/Dairyland-Images/Products/Thumbnail/milk2.ashx?revision=cdaad223-b206-487a-8c4c-5e0ab80075ed)"
    },
    {
        id:3,
        total:0,
        quantity: 1,
        name: "Cheese",
        price: 3.05,
        description: "12 SLICES GOOD source Of CALCIUM, NO artificial FLAVORS, NATURALLY gluten-free food",
        img: "https://i5.walmartimages.ca/images/Large/000/849/999999-628915000849.jpg?odnBound=460"
    },
    {   
        id:4,
        total:0,
        quantity: 1,
        name: "Rice",
        price: 10.15,
        description: "Serve up delicious meals using Great Value Long Grain White Rice. This versatile staple offers ideal value and is the perfect complement to popular recipes such as curries, stir-fries and home-made soups.",
        img: "https://i5.walmartimages.ca/images/Large/082/838/999999-628915082838.jpg?odnBound=460"
    },
    {   
        id:5,
        total:0,
        quantity: 1,
        name: "Eggs",
        price: 6.20,
        description: "Great Value Large Eggs. Great Value has the everyday essentials your family needs with guaranteed, money-back quality. From breakfast to baking, Great Value eggs can’t be beat!                ",
        img: "https://i5.walmartimages.ca/images/Large/924/227/6000197924227.jpg?odnBound=460"
   }
    ],
    selectedProduct:[],  //newArray conains the bought items
    subTotal:0
  }

  //adding an item to the cart
  addToCart =(item)=>{
   this.setState({selectedProduct:this.state.selectedProduct.concat([item])}) 
  }
  
//removing an item from cart
  removeItem=(item)=>{
    let newArray=[...this.state.selectedProduct];
    let index = newArray.indexOf(item);
      newArray.splice(index,1);
    this.setState({selectedProduct:newArray})
  }

  //rendering the items on the page and link the pages together
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=>(
        <CartList cartItems={this.state.cartItems} buy={this.addToCart} 
            addProduct={this.state.selectedProduct} />
        )} />
        <Route path="/cart" render={()=>(
        <Cart selectProduct={this.state.selectedProduct} total={this.total} removeI={this.removeItem}/>
        )}/>
      </div>
    );
  }
}

export default App;
