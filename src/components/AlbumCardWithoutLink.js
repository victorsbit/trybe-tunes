import React from 'react';
import PropTypes from 'prop-types';

function AlbumCardWithoutLink({ name, thumbnail }) {
  return (
    <div id="card">
      <img src={ thumbnail } alt={ name } />
      <span>
        { name }
      </span>
    </div>
  );
}

AlbumCardWithoutLink.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default AlbumCardWithoutLink;
