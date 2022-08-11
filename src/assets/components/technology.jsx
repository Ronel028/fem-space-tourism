import React, { useEffect, useState } from "react";
import { technology } from '../../../data.json'

function Technology(){

    const [screenSize, setScreenSize] = useState(1440);
    const [active, setActive] = useState({
        first: true,
        second: false,
        third: false
    })
    const [chooseTechnology, setTechnology] = useState({
        techName: '',
        techImage: '',
        techDescription: ''
    })

    // function to toggle button active
    function btnActive(btn1, btn2, btn3){
        setActive(function(prevState){
            return{
                ...prevState,
                first: btn1,
                second: btn2,
                third: btn3
            }
        })
    }

    function techChoose(name){
        technology.filter(function(tech){
            if(tech.name === name){
                setTechnology(function(currentState){
                    return {
                        ...currentState,
                        techName : tech.name,
                        techImage: window.innerWidth <= 980 ? tech.images.landscape : tech.images.portrait,
                        techDescription: tech.description
                    }
                })
            }
        })
    }

    function getTechnologyInfo(){
        if(active.first){
            techChoose('Launch vehicle')
        }else if(active.second){
            techChoose('Spaceport')
        }else if(active.third){
            techChoose('Space capsule')
        }
    }
    

    function handleClick(event){
        const { id } = event.target;
        if(id === 'active-1'){
            btnActive(true, false, false)
        }else if(id === 'active-2'){
            btnActive(false, true, false)
        }else if(id === 'active-3'){
            btnActive(false, false, true)
        }
    }
    
    useEffect(function(){
        getTechnologyInfo()
    }, [active])

    useEffect(function(){
        window.addEventListener('resize', function(){
            setScreenSize(window.innerWidth)
            getTechnologyInfo()
        })
    }, [screenSize])

    return(
        <section className="technology--container">
            <div className="technology container container-left py-1">
                <div className="title container">
                    <h2 className="heading-5 text-mobile">
                        <span className="span-1">03</span>SPACE LAUNCH 101
                    </h2>
                </div>
                <div className="technology-content">
                    <div className="technology-description">
                            <div className="btn">
                                <ul>
                                    <li 
                                        className={active.first ? 'active' : ''}
                                        id='active-1'
                                        onClick={handleClick}
                                    >
                                        1
                                    </li>
                                    <li
                                        className={active.second ? 'active' : ''}
                                        id="active-2"
                                        onClick={handleClick}
                                    >
                                        2
                                    </li>
                                    <li
                                        className={active.third ? 'active' : ''}
                                        id="active-3"
                                        onClick={handleClick}
                                    >
                                        3
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <h5 className="nav-text color-icy">THE TERMINOLOGY…</h5>
                                <h3 className="heading-3">{chooseTechnology.techName}</h3>
                                <p className="color-icy">
                                    {chooseTechnology.techDescription}
                                </p>
                            </div>
                    </div>
                    <div className="technology-image">
                        <img src={chooseTechnology.techImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology;