import React from 'react';
import PropTypes from 'prop-types';

function AlbumCard({ name, thumbnail }) {
  return (
    <div id="card">
      <img src={ thumbnail } alt={ name } />
      <span>
        { name }
      </span>
    </div>
  );
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default AlbumCard;
