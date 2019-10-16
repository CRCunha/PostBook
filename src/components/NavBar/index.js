import React from 'react'
import './navBar.css'
import Adicionar from './img/plus.png'
import Logo from './img/PostBook.png'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <div className="container">
            <div className="logo"><img src={Logo} alt="logo" /></div>
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
                    <Link to="/adicionarLivro">
                        <img src={Adicionar} alt="adicionarLivro" />
                    </Link>
                    <div className="avatar"></div>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;