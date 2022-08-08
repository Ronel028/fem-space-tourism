import React, { useState, useEffect } from "react";

import Planet from '../images/destination/image-mars.webp'
import { destinations } from '../../../data.json';

function Destination(){

    const [active, setActive] = useState({
        moon: true,
        mars: false,
        europa: false,
        titan: false
    });

    const [destination, setDestination] = useState({
        planetName: '',
        planetDescription: '',
        planetImages: '',
        planetDistance: '',
        planetTravel: ''
    })

    function choosePlanet(){
        if(active.moon){
            destinations.filter(item =>{
                if(item.name === 'Moon'){
                    setDestination(function(currentState){
                        return {
                            ...currentState,
                            planetName: item.name,
                            planetImages: item.images.webp,
                            planetDescription: item.description,
                            planetDistance: item.distance,
                            planetTravel: item.travel
                        }
                    })
                }
            })
        }else if(active.mars){
                destinations.filter(item =>{
                    if(item.name === 'Mars'){
                        setDestination(function(currentState){
                            return {
                                ...currentState,
                                planetName: item.name,
                                planetImages: item.images.webp,
                                planetDescription: item.description,
                                planetDistance: item.distance,
                                planetTravel: item.travel
                            }
                        })
                    }
                })
        }else if(active.europa){
                destinations.filter(item =>{
                    if(item.name === 'Europa'){
                        setDestination(function(currentState){
                            return {
                                ...currentState,
                                planetName: item.name,
                                planetImages: item.images.webp,
                                planetDescription: item.description,
                                planetDistance: item.distance,
                                planetTravel: item.travel
                            }
                        })
                    }
                })
        }else if(active.titan){
                destinations.filter(item =>{
                    if(item.name === 'Titan'){
                        setDestination(function(currentState){
                            return {
                                ...currentState,
                                planetName: item.name,
                                planetImages: item.images.webp,
                                planetDescription: item.description,
                                planetDistance: item.distance,
                                planetTravel: item.travel
                        }
                    })
                }
            })
        }
    }

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

    console.log('render')

    useEffect(()=>{
        choosePlanet()
    }, [active])

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
                        <img src={destination.planetImages} alt="Mars" />
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
                                <h1 className="heading-2">{destination.planetName}</h1>
                                <p className="color-icy">
                                    {destination.planetDescription}
                                </p>
                            </div>
                            <div className="planet-distance">
                                <div className="distance">
                                    <p className="subheading-2 color-icy">AVG. DISTANCE</p>
                                    <h3 className="subheading-1">{destination.planetDistance}</h3>
                                </div>
                                <div className="travel-time">
                                    <p className="subheading-2 color-icy">EST. TRAVEL TIME</p>
                                    <h3 className="subheading-1">{destination.planetTravel}</h3>
                                </div>
                            </div>
                        </div>
                        {/* end */}

                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Destination;