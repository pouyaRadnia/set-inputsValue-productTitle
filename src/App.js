import React from 'react'
import ProductList from './components/productList/productList'
import Main from './components/main/main'
import Wrapper from './hoc/Wrapper'
import Container from './hoc/container'
import AuthContext from './contex/auth-contex'
import './App.css'
import authContext from './contex/auth-contex'


class App extends React.Component{
  constructor(props){
    super(props)
    console.log('App.js constructor')
  }

  state={
    products:[
     {id:1, title:'book1' ,price:89},
     {id:2, title:'book2' ,price:79},
     {id:3, title:'book3' ,price:69},
    ],
    showProduct:false,
    showMain:true,
    auth:false
  }

  componentDidMount(){
    console.log('App.js componentDidMount')
  }
  

  toggeleProductHandler=()=>{
    const show=this.state.showProduct
    this.setState({showProduct:!show })
      
   
  }
  changeTitleHandler=(event,id)=>{
    
    const productIndex=this.state.products.findIndex((item)=>{
      return item.id===id
    })
    const product={
      ...this.state.products[productIndex]
    }
    product.title=event.target.value
    const products = [...this.state.products]
    products[productIndex]=product
    this.setState({products:products})

  }
  deletProductHandler=(index)=>{
   
    const product=[...this.state.products]
    product.splice(index,1)
    this.setState({products:product})
  }
  loginHandler=() =>{
    this.setState({auth:true})
  }

  
  render(){
    console.log('App.js render')
    let products = null
    if(this.state.showProduct){
      products=(
      <div>
        <ProductList 
        products={this.state.products}
        click={this.deletProductHandler}
        change={this.changeTitleHandler}
        isAuth={this.state.auth}
        />
  </div>
      )
  }
    return(
      <Container>
        <button onClick={()=>{
          this.setState({showMain : false})
        }}>
          Remove Main
        </button>
        <AuthContext.Provider
         value={{auth:this.state.auth,login:this.loginHandler }}>
        {this.state.showMain ? 
        <Main
         products={this.state.products} 
        click={this.toggeleProductHandler}
        
        /> : null}
       {products}
       </AuthContext.Provider>
      </Container>
    )
  }
}

export default Wrapper(App,'center')





