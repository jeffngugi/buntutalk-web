import React from 'react'
import {Link} from 'react-router-dom';
import {NavLink, StyledLink, Button} from '../Styles'

const Navbar = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={`/images/logo.png`} height='25'/>
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/support'>Support Group</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/careers'>Careers</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                    </li>
                    <li className="nav-item">
                    
                    <StyledLink className="nav-link" to='/start'>Get Started</StyledLink>
                    
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
        </section>
    )
}

export default Navbar
