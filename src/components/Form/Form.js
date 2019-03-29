import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      imageUrl: '',
      productName: '',
      price: 0,
    }
  }

  handleChange=(e)=>{
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  reset=()=>{
    this.setState({
      imageUrl: '',
      productName: '',
      price: 0
    })
  }

  addProduct=(product)=>{
    axios.post('/api/product', product).then(res => {
      this.setState({
        imageUrl: '',
        productName: '',
        price: 0
      })
      this.props.get()
    })
  }

  render() {
    const {imageUrl, productName, price} = this.state
    const product = this.state
    return(
      <div className='form' >
        <div className='img' >
          <img src={imageUrl} alt=''/>
        </div>
        <div className='form-info' >
          <h4 className='text' >Image URL: <input className='input' onChange={this.handleChange} name='imageUrl' value={imageUrl}></input></h4>
          <h4 className='text' >Product Name: <input className='input' onChange={this.handleChange} name='productName' value={productName}></input></h4>
          <h4 className='text' > Price: <input className='input' onChange={this.handleChange} name='price' value={price} ></input></h4>
          <div className='form-buttons' >
            <button className='form-button' onClick={this.reset}>Cancel</button>
            <button className='form-button' onClick={() => this.addProduct(product)}>Add to Inventory</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form