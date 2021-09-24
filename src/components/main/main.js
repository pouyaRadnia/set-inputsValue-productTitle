import React,{useEffect,useRef} from 'react'
import AuthContext from '../../contex/auth-contex'

const Main=(props) =>{
 const btnRef = useRef(null)
  useEffect(()=>{
      console.log('main.js useEffect')
      btnRef.current.click()
  },[])
    const btn = {
        backgroundColor: '#7b1fa2',
        color:'#ffffff',
        font:'inherit',
        border:'none',
        outline:'none',
        borderRadus:'3px',
        padding:'0.6rem',
        margin:'0.6rem auto'
      }
   return( 
       <div>
   <h2>who is the best progeramer</h2>
    <button ref={btnRef} style={btn} onClick={props.click}>
        show/hide Products
        </button>
        <AuthContext.Consumer>
      {(contex) => <button onClick={contex.login}>login</button>}
       </AuthContext.Consumer>
        </div>
   )
}

export default Main