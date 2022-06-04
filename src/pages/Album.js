import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlbumCardWithoutLink from '../components/AlbumCardWithoutLink';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import Track from '../components/Track';

function Album({ match: { params: { id } } }) {
  const [state, setTrackList] = useState({
    trackList: [],
    fetched: false,
  });

  useEffect(() => {
    const getMusicList = async () => {
      const musicList = await getMusics(id);
      setTrackList((prevState) => ({
        ...prevState,
        trackList: musicList,
        fetched: true,
      }));
    };

    getMusicList();
  });

  return (
    <div>
      <Header />
      {!state.fetched ? 'Carregando' : (
        <section>
          <AlbumCardWithoutLink
            name={ state.trackList[0].collectionName }
            thumbnail={ state.trackList[0].artworkUrl100 }
          />
          <div>
            {state.trackList.slice(1).map((track) => (
              <Track
                key={ track.trackId }
                name={ track.trackName }
                url={ track.previewUrl }
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
