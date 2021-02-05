import logo from './img/logo.png';
import fe from './img/fe.png';
import './Home.scss';
import Widget from './Widget.js';
import propertyData from './data/widget-data.json';
import React, {useState} from 'react'
import {ReactComponent as ArrowLeft} from './img/arrowRight.svg';
import {ReactComponent as ArrowRight} from './img/arrowLeft.svg';
import Modal from './Modal';

function Home() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(0);
    const [curSlide, setCurSlide] = useState(0);

    const prevSlide = () =>{
        let current = curSlide - 1 < 0 ? propertyData.length - 1:  curSlide - 1;
        setCurSlide(current)
    };

    const nextSlide = () =>{
        let current = curSlide + 1 < propertyData.length ? curSlide + 1 : 0;
        setCurSlide(current);
    };

    return (
        <div className="Home">
            <header className="top-nav">
                <div className="top-nav--logo">
                    <img src={logo} className="top-nav--logoImg" alt="Logo"/>
                </div>
                <div className="top-nav--logoRight">
                    <img src={fe} className="top-nav--logoImg" alt="Frontend"/>
                </div>
            </header>
            <div className="main">
                <div className="main--text">
                    <h1>Start Your Journey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="main--widget">
                    <div className="main--widgetListings slider">
                        <Widget setPropertyData={propertyData} setOpen={setOpen} setIndex={setIndex} slideActive={curSlide}/>

                        <div className="arrow arrow-left" onClick={prevSlide}>
                            <ArrowLeft/>
                        </div>
                        <div className="arrow arrow-right" onClick={nextSlide}>
                            <ArrowRight/>
                        </div>
                    </div>

                </div>
            </div>

            <Modal setOpen={setOpen} openModalChange={open} indexModalChange={index} setPropertyData={propertyData}/>


        </div>
    );
}

export default Home;
