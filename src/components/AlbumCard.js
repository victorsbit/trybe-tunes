import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AlbumCard({ name, thumbnail, albumID }) {
  const URL = `/album/${albumID}`;

  return (
    <div id="card">
      <img src={ thumbnail } alt={ name } />
      <span>
        <Link to={ URL }>{ name }</Link>
      </span>
    </div>
  );
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  albumID: PropTypes.number.isRequired,
};

export default AlbumCard;
