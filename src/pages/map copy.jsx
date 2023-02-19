import React, { useState } from "react";
import mapPic from './images/sfblankmap.jpg'

const locations = [
        { id: 1, name: "Location 1", x: 0.3, y: 0.4,},
        { id: 2, name: "Location 2", x: 0.6, y: 0.2,},
        // add more locations here
];

const Maps = () =>{
        const [selectedLocation, setSelectedLocation] = useState(null);

        const handleLocationClick = (location) => {
                setSelectedLocation(location);
        };

        const mapStyle = {
                width: "100vw",
                height: "100vh",
                background: `url(${mapPic}) no-repeat center center fixed`,
                backgroundSize: "cover",
        };
        const markerStyles = {
                position: "absolute",
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "blue",
                cursor: "pointer",
        };

        const renderMarkers = () => {
                return locations.map(location) => {
                        const markerX = location.x * 100 + "%";
                        const markerY = location.y * 100 + "%";
                        const isSelected = selectedLocation && selectedLocation.id == location.id;
                        return (
                                <div 
                                key={location.id} 
                                style={{
                                        markerStyles, 
                                        top: markerY, 
                                        left: markerX, 
                                        transform: "translate(-50%, -50%)", 
                                        boxShadow: isSelected ? "0 0 0 4px rgba(255, 255, 0, 0.6)" : "none",
                                }}
                                onClick={() => handleLocationClick(location)}
                                />
                        )
                }
        }

        return (
                <div class="mapbody">
                <img src={mapPic} alt="map of SF" style = {mapStyle}/>
                </div>
        )
}
export default Maps;