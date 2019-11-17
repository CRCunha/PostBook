import React from 'react'
import './contentHome.css'
import Posts from './posts'
import Livros from './livros'
import ListarUsers from '../ListarUsers'
import VegHouse from './IMG/vegHouse.svg'
import TheVoid from './IMG/TheVoid.png'
import Gatel from './IMG/Gatel.png'
import CarePair from './IMG/carepair.png'
import Carousel from 're-carousel'

const ContentHome = () => (
    <div className="contentHome">
        <div className="container">
            <div className="left">
                <div className="div1" id="div">
                    <Carousel loop auto interval={4000} transitionTime>
                        <a href="https://peil.dev/vegHouse" target="_blanck">
                            <img src={VegHouse} alt="Veg House"/>
                        </a>
                        <a href="https://github.com/damassa/the-void" target="_blanck">
                            <img src={TheVoid} alt="The Void" id="void"/>
                        </a>
                        <a href="https://github.com/CristianoRC/Gatel" target="_blanck">
                            <img src={Gatel} alt="Gatel"/>
                        </a>
                        <a href="https://github.com/" target="_blanck">
                            <img id="carepair" src={CarePair} alt="Gatel"/>
                        </a>
                    </Carousel>
                </div>
                <div className="div2" id="div">
                    <div className="container">
                        <ListarUsers />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="div1" id="div">
                    <Carousel loop auto interval={3500} transitionTime>
                        <div className="slide" id="slide1"></div>
                        <div className="slide" id="slide2"></div>
                        <div className="slide" id="slide3"></div>
                        <div className="slide" id="slide4"></div>
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