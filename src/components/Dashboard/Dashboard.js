import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {

  deleteProduct=(product)=>{
    axios.delete(`/api/product/${product.product_id}`).then(res => {
      this.props.get()
    })
  }

  editProduct=()=>{
    axios.put(`/api/product/${product.product_id}`).then(res => {
      
    })
  }

  render(){
    const displayInventory = this.props.inventory.map((product, i) => {
      return(
        <div key={product.product_id}>
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