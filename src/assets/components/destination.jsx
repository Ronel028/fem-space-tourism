import React, { useState, useEffect } from "react";

import DestinationData from './partials/destinationData';
import { destinations } from '../../../data.json';
import Navbar from "./navbar";

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

    // filter planet my name
    function choose(planetName){
        destinations.filter(item =>{
            if(item.name === planetName){
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

    // condition to display what the planet is active by click
    function choosePlanet(){
        if(active.moon){
            choose('Moon')
        }else if(active.mars){
            choose('Mars')
        }else if(active.europa){
            choose('Europa')
        }else if(active.titan){
            choose('Titan')
        }
    }

    function destinationPlanet(moon, mars, europa, titan){
        setActive(function(currentState){
            return {
                ...currentState,
                moon: moon,
                mars: mars,
                europa: europa,
                titan: titan
            }
        })
    }

    // click event for add a active indicator of what planet is active
    function handleClick(event){
        const { name } = event.target;
        if(name === 'moon'){
            destinationPlanet(true, false, false, false)
        }else if(name === 'mars'){
            destinationPlanet(false, true, false, false)
        }else if(name === 'europa'){
            destinationPlanet(false, false, true, false)
        }else if(name === 'titan'){
            destinationPlanet(false, false, false, true)
        }
    }

    useEffect(()=>{
        choosePlanet()
    }, [active])

    return (
        <section className="destination--container py-2">
            <DestinationData 
                active={active}
                clickEvent={handleClick}
                destination={destination}
            />
        </section>
        
    )
}

export default Destination;