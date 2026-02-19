import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <NavLink className="navbar-brand" to="/">
                My Portfolio
            </NavLink>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id="navbarNav">
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'><NavLink to="/" end className={({isActive})=>
                        isActive ? "nav-link active" : "nav-link"
                    }>Anasayfa</NavLink></li>
                    <li className='nav-item'><NavLink to="/about" end className={({isActive})=>
                        isActive ? "nav-link active" : "nav-link"
                    }>Hakkımda</NavLink></li>
                    <li className='nav-item'><NavLink to="/skills" end className={({isActive})=>
                        isActive ? "nav-link active" : "nav-link"
                    }>Yetenekler</NavLink></li>
                    <li className='nav-item'><NavLink to="/projects" end className={({isActive})=>
                        isActive ? "nav-link active" : "nav-link"
                    }>Projeler</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header