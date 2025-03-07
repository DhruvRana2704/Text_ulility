import React from 'react'

function Alert(props) {
    let capitalize=(word)=>{
    let lower=word.toLowerCase();
    let first=lower.charAt(0).toUpperCase();
    return first+lower.slice(1);
    }
  return (
    
    <div style={{height:"50px"}}>
    {
    props.alert &&<div>
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  
  </div>
    </div>}
    </div>
    
  )
}

export default Alert
