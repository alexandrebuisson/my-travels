import React from "react";

const Travel = ({ destination, country, photo, distance}) => (
    <figure>
        <h1>{country}, {destination}</h1>
        <img src={photo} alt={destination} />
        <p>A une distance de Bordeaux de : {distance}</p>
    </figure>


);

export default Travel;
