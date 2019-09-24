import React from 'react';
import "./aside.css"
import Home from './IMG/home.png';
import Feed from './IMG/feed.png';
import User from './IMG/user.png';
import Book from './IMG/book.png';
import Logout from './IMG/logout.png';

const Aside = () => (
    <aside>
        <div className="avatarContainer">
            <div className="avatarImagem">
            </div>
        </div>
        <div className="menuContainer">
            <div className="opMenu" id="home">
                <img src={Home} alt="home" />
            </div>
            <div className="opMenu"  id="feed">
                <img src={Feed} alt="feed"/>
            </div>
            <div className="opMenu"  id="user">
                <img src={User} alt="user"/>
            </div>
            <div className="opMenu"  id="book">
                <img src={Book} alt="book"/>
            </div>
        </div>
        <div className="logoutContainer">
            <img src={Logout} alt="logout"/>
        </div>
    </aside>
);


export default Aside;