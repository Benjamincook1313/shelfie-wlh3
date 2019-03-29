import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      editProduct: {}
    }
  }

  componentDidMount=()=>{
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }



  render() {
    const { inventory } = this.state
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <section style={{display: 'flex', justifyContent: 'space-around'}}>
          <Dashboard 
            inventory={inventory} 
            get={this.componentDidMount}
          />
          <Form get={this.componentDidMount}/>
        </section>
      </div>
    );
  }
}

export default App;
