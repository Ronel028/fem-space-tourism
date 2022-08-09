import React from "react";

function DestinationData(props){


    let { active, clickEvent, destination } = props

    return (
        <div className="destination container">
                <div className="title">
                    <h2 className="heading-5">
                        <span className="span-1">01</span>PICK YOUR DESTINATION
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
                                    onClick={clickEvent}
                                >
                                    MOON
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.mars ? 'active' : ''}
                                    name="mars"
                                    onClick={clickEvent}
                                >
                                    MARS
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.europa ? 'active' : ''}
                                    name="europa"
                                    onClick={clickEvent}
                                >
                                    EUROPA
                                </a>
                            </li>
                            <li>
                                <a
                                    className={active.titan ? 'active' : ''}
                                    name="titan"
                                    onClick={clickEvent}
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
    )
}

export default DestinationData;