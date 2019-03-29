import React, { Component } from 'react'

class Product extends Component {
  render(){
    const { product } = this.props
    return(
      <div className='product'>
        <img className='img' src={this.props.inventory.image_url} alt=''/>
        <div className='productInfo' >
          <div>{this.props.inventory.product_name}</div>
          <div>${this.props.inventory.price}</div>
        </div>  
        <div className='buttons' >
          <button onClick={() => this.props.deleteProduct(product)}>Delete</button>
          <button onClick={() => this.props.editProduct(product)} >Edit</button>
        </div>
      </div>
    )
  }
}

export default Product