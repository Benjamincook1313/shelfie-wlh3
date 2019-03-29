import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {

  deleteProduct=(product)=>{
    axios.delete(`/api/product/${product.id}`).then(res => {
      
    })
    this.props.get()
  }
  render(){
    const displayInventory = this.props.inventory.map((product, i) => {
      return(
        <div key={`${product.id}`}>
          <Product 
          inventory={this.props.inventory[i]} 
          deleteProduct={this.deleteProduct}
          product={product}
          />
        </div>
      )
    })
    return(
      <div>
        {displayInventory}
      </div>
    )
  }
}

export default Dashboard;