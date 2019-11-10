import React from 'react'
import './contentHome.css'
import Posts from './posts'
import Livros from './livros'
import ListarUsers from '../ListarUsers'
import VegHouse from './IMG/vegHouse.svg'
import Carousel from 're-carousel'

const ContentHome = () => (
    <div className="contentHome">
        <div className="container">
            <div className="left">
                <div className="div1" id="div">
                    <a href="https://peil.dev/vegHouse" target="_blanck">
                        <img src={VegHouse} alt="Veg House"/>
                    </a>
                </div>
                <div className="div2" id="div">
                    <div className="container">
                        <ListarUsers />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="div1" id="div">
                    <Carousel loop auto>
                        <div className="slide" id="slide1">Slide 1</div>
                        <div className="slide" id="slide2">Slide 2</div>
                        <div className="slide" id="slide3">Slide 3</div>
                    </Carousel>
                </div>
                <div className="botton">
                    <div className="div2" id="div"></div>
                    <div className="div3" id="div"></div>
                    <div className="div4" id="div"></div>
                </div>
            </div>
            <div className="right">
                <div className="top" id="div">
                    <div className="container">
                        <Livros />
                    </div>
                </div>
                <div className="bot" id="div">
                    <div className="container">
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContentHome;