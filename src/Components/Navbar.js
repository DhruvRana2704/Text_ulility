import React from 'react'   //rfc
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>   
      </ul>
{/* 
      <div className="d-flex">
        <div className='bg-primary rounded mx-3' style={{height:'30px', width:'30px' , cursor:"pointer"}} onClick={()=>{props.toggleMode('primary');}}></div>
        <div className='bg-danger rounded mx-3' style={{height:'30px', width:'30px' ,cursor:"pointer"}} onClick={()=>{props.toggleMode('danger');}}></div>
        <div className='bg-success rounded mx-3' style={{height:'30px', width:'30px' ,cursor:"pointer"}} onClick={()=>{props.toggleMode('success');}}></div>
        <div className='bg-warning rounded mx-3' style={{height:'30px', width:'30px' ,cursor:"pointer"}} onClick={()=>{props.toggleMode('warning');}}></div>
        <div className='bg-light rounded mx-3' style={{border:'1px solid black' ,height:'30px', width:'30px' ,cursor:"pointer"}} onClick={()=>{props.toggleMode('light');}}></div>
        <div className='bg-dark rounded mx-3' style={{border:'1px solid white',height:'30px', width:'30px' ,cursor:"pointer"}} onClick={()=>{props.toggleMode('dark');}}></div>
      </div> */}

      <form className="d-flex" role="search">
        <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
        <input onClick={()=>{props.toggleMode('null')}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> Dark Mode</label>
        </div>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    // about: PropTypes.string.isRequired
    }
// Navbar.defaultProps={
//     title: 'Set Title here',
//     about: 'Set About'
// }