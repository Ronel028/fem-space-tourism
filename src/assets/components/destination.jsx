import React, { useState, useEffect } from "react";

import DestinationData from './destinationData';
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

    // click event for add a active indicator of what planet is active
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

    useEffect(()=>{
        choosePlanet()
    }, [active])

    return (
        <section className="destination--container py-1">
            <DestinationData 
                active={active}
                clickEvent={handleClick}
                destination={destination}
            />
        </section>
        
    )
}

export default Destination;