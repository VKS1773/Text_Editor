import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <div>
        <nav className={` navbar navbar-expand-lg navbar-lg bg-${props.mode}`}>
            <div className="container-fluid">
            <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation text-primary">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link  text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">{props.home}</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/About">{props.about}</Link>
                </li>
                
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={props.changemode} role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >enable {props.mode==='light'?'dark':'light'} mode</label>
            </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

Navbar.propTypes=
{
    title:PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Tittle",
    home:"Home",
    about:"About"
}
