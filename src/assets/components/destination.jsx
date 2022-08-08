import React, { useState } from "react";

import Planet from '../images/destination/image-mars.webp'

function Destination(){

    const [active, setActive] = useState({
        moon: true,
        mars: false,
        europa: false,
        titan: false
    });

    function handleClick(event){
        const { name } = event.target;
        if(name === 'moon'){
            setActive(function(currentState){
                return {
                    ...currentState,
                    moon: true,
                    mars: false,
                    europa: false,
                    titan: false
                }
            })
        }else if(name === 'mars'){
            setActive(function(currentState){
                return {
                    ...currentState,
                    moon: false,
                    mars: true,
                    europa: false,
                    titan: false
                }
            })
        }else if(name === 'europa'){
            setActive(function(currentState){
                return {
                    ...currentState,
                    moon: false,
                    mars: false,
                    europa: true,
                    titan: false
                }
            })
        }else if(name === 'titan'){
            setActive(function(currentState){
                return {
                    ...currentState,
                    moon: false,
                    mars: false,
                    europa: false,
                    titan: true
                }
            })
        }
    }







    return (
        <section className="destination--container py-1">
            <div className="destination container">
                <div className="title">
                    <h2 className="heading-5">
                        <span>01</span>PICK YOUR DESTINATION
                    </h2>
                </div>
                <div className="destination-planet container-md">
                    <div className="planet">
                        <img src={Planet} alt="Mars" />
                    </div>
                    <div className="planet-name">
                        <ul>
                            <li>
                                <a
                                    className={active.moon ? 'active' : ''}
                                    name="moon"
                                    onClick={handleClick}
                                >
                                    MOON
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.mars ? 'active' : ''}
                                    name="mars"
                                    onClick={handleClick}
                                >
                                    MARS
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.europa ? 'active' : ''}
                                    name="europa"
                                    onClick={handleClick}
                                >
                                    EUROPA
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.titan ? 'active' : ''}
                                    name="titan"
                                    onClick={handleClick}
                                >
                                    TITAN
                                </a>
                            </li>
                        </ul>
                        {/* PLANET CHOOSE */}
                        <div className="planet-choose">
                            <div className="planet-description">
                                <h1 className="heading-2">MOON</h1>
                                <p className="color-icy">
                                    See our planet as you’ve never seen it before. A perfect 
                                    relaxing trip away to help regain perspective and come 
                                    back refreshed. While you’re there, take in some history 
                                    by visiting the Luna 2 and Apollo 11 landing sites.
                                </p>
                            </div>
                            <div className="planet-distance">
                                <div className="distance">
                                    <p className="subheading-2 color-icy">AVG. DISTANCE</p>
                                    <h3 className="subheading-1">384,400 km</h3>
                                </div>
                                <div className="travel-time">
                                    <p className="subheading-2 color-icy">EST. TRAVEL TIME</p>
                                    <h3 className="subheading-1">3 days</h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Destination;