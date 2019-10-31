import React from 'react'
import './navBar.css'
import Adicionar from './img/plus.png'
import Logo from './img/PostBook.png'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
            <div className="menu">
                <Link to="/">
                    <div className="menuBtn">Home</div>
                </Link>
                <Link to="/posts">
                    <div className="menuBtn">Posts</div>
                </Link>
                <Link to="/books">
                    <div className="menuBtn">Library</div>
                </Link>
                <Link to="/grupos">
                    <div className="menuBtn">Group</div>
                </Link>
            </div>
            <div className="userControls">
                <div className="container">
                    <Link to="/adicionarLivro">
                        <img src={Adicionar} alt="adicionarLivro" />
                    </Link>
                    <Link to="/perfil">
                        <div className="avatar"></div>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;