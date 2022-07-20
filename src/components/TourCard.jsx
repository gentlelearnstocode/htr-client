import React from 'react';
import PropTypes from 'prop-types';

const TourCard = ({ src, name }) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <img className="card__img" src={src} />
          <div className="card__heading">{name}</div>
          <div className="card__details">details</div>
        </div>
        <div className="card__side card__side--back card__side--back-1">Card back</div>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TourCard;
