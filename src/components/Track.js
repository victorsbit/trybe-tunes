import React from 'react';
import PropTypes from 'prop-types';

function Track({ name, url }) {
  return (
    <div>
      <span>{ name }</span>
      <br />
      <audio src={ url } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
    </div>
  );
}

Track.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Track;
