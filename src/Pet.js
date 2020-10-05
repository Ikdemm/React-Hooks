import React from "react";

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = "http://placeorgi.com/3000";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </div>
    </a>
  );
};

export default Pet;
