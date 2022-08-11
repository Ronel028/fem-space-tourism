import React, { useEffect, useState } from "react";

import { crew } from '../../public/data.json';

function Crew(){


    const [active, setActive] = useState({
        circle1: true,
        circle2: false,
        circle3: false,
        circle4: false
    })

    const [crewName, setCrewName] = useState({
        name: '',
        image: '',
        role: '',
        bio: ''
    })

    function filterCrew(crewName){
        crew.filter(name =>{
            if(name.name === crewName){
                setCrewName(function(currentState){
                    return {
                        ...currentState,
                        name: name.name,
                        image: name.images.webp,
                        role: name.role,
                        bio: name.bio
                    }
                })
            }
        })
    }

    function yourCrew(){
        if(active.circle1){
            filterCrew('Douglas Hurley')
        }else if(active.circle2){
            filterCrew('Mark Shuttleworth')
        }else if(active.circle3){
            filterCrew('Victor Glover')
        }else if(active.circle4){
            filterCrew('Anousheh Ansari')
        }
    }

    function chooseActive(circle1, circle2, circle3, circle4){
        setActive(function(currentState){
            return {
                ...currentState,
                circle1: circle1,
                circle2: circle2,
                circle3: circle3,
                circle4: circle4
            }
        })
    }

    function handleClick(event){
        const { id } = event.target;
        if(id === 'circle-1'){
            chooseActive(true, false, false, false)
        }else if(id === 'circle-2'){
            chooseActive(false, true, false, false)
        }else if(id === 'circle-3'){
            chooseActive(false, false, true, false)
        }else if(id === 'circle-4'){
            chooseActive(false, false, false, true)
        }
    }
    
    useEffect(function(){
        yourCrew()
    }, [active])

    return (
        <section className="crew--container">
            <div className="crew container py-1">
                <div className="title">
                    <h2 className="heading-5 text-mobile">
                        <span className="span-1">02</span>MEET YOUR CREW
                    </h2>
                </div>
                <div className="crew-profile">
                    <div className="crew-info">
                        <div className="crew-content">
                            <h4 className="heading-4">{crewName.role}</h4>
                            <h2 className="heading-3">{crewName.name}</h2>
                            <p className="color-icy">{crewName.bio}</p>
                        </div>
                        <div className="circle-dots">
                            <div className="circle-container">
                                <div 
                                    className={active.circle1 ? 'circle active' : 'circle'}
                                    id="circle-1"
                                    onClick={handleClick}
                                ></div>
                                <div 
                                    className={active.circle2 ? 'circle active' : 'circle'}
                                    id="circle-2"
                                    onClick={handleClick}
                                ></div>
                                <div 
                                    className={active.circle3 ? 'circle active' : 'circle'}
                                    id="circle-3"
                                    onClick={handleClick}
                                ></div>
                                <div 
                                    className={active.circle4 ? 'circle active' : 'circle'}
                                    id="circle-4"
                                    onClick={handleClick}
                                ></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="crew-profile-image">
                        <img src={crewName.image} alt={crewName.name} />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Crew;