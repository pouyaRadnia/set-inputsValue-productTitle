
import React,{Component} from 'react' 

import Wrapper from '../../hoc/Wrapper'
import AuthContex from '../../contex/auth-contex'

import './product.css'


class Product extends Component{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
    this.inputRef.current.focus()
}
render() {

    console.log('Product')
    return (
        <React.Fragment>
            <AuthContex.Consumer>
            {(contex)=>contex.auth ? <p>Logged in</p> :<p>Please login</p>}
            </AuthContex.Consumer>
        <p key='1' onClick={this.props.click} >product name is:{this.props.title} </p>,
        <p key='2'>product price  is:{this.props.price} </p>,
        <p key='3'>{this.props.children} </p>,
        <input
        ref={this.inputRef}
         key='4'
         type='text' 
         onChange={this.props.change} 
          value={this.props.title}
           />
    </React.Fragment>
    )
}
     
}
export default Wrapper(Product,'product')