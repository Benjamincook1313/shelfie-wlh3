import React, { Component } from 'react'

class Product extends Component {
  render(){
    return(
      <div className='product'>
        <img className='img' src={this.props.inventory.image_url} alt=''/>
        <div className='productInfo' >
          <div>{this.props.inventory.product_name}</div>
          <div>${this.props.inventory.price}</div>
        </div>  
        <div className='buttons' >
          <button onClick={() => this.props.deleteProduct(this.props.product)}>Delete</button>
          <button onClick={this.editProduct} >Edit</button>
        </div>
      </div>
    )
  }
}

export default Product