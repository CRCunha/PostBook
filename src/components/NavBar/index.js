import React from 'react'
import './navBar.css'
import Adicionar from './img/plus.png'
import { BrowserRouter, Link } from 'react-router-dom'

const NavBar = () => (
    <BrowserRouter>
    <nav>
        <div className="container">
            <div className="logo">POST BOOK</div>
            <div className="menu">
                <Link to="/">
                    <div className="menuBtn">Home</div>
                </Link>
                <Link to="/posts">
                    <div className="menuBtn">Posts</div>
                </Link>
                <Link to="/books">
                    <div className="menuBtn">Books</div>
                </Link>
                <Link to="/grupos">
                    <div className="menuBtn">Grupos</div>
                </Link>
            </div>
            <div className="userControls">
                <div className="container">
                    <Link to="/adicionar">
                        <img src={Adicionar} alt="adicionar" />
                    </Link>
                    <div className="avatar"></div>
                </div>
            </div>
        </div>
    </nav>
    </BrowserRouter>
);


export default NavBar;