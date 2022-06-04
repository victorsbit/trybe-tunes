import React, { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

function Search() {
  const [state, setState] = useState({
    inputValue: '',
    albumList: [],
    fetched: false,
    loading: false,
  });

  const searchForAlbums = async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    const { inputValue } = state;

    const albumList = await searchAlbumsAPI(inputValue);

    setState((prevState) => ({
      ...prevState,
      albumList,
      fetched: true,
      loading: false,
    }));
  };

  const handleInput = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: target.value,
    }));
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">
        <section className="search-container">
          <label htmlFor="search-artist">
            Pesquisar artista:
            <br />
            <input
              type="text"
              id="search-artist"
              onChange={ handleInput }
            />
          </label>
          <button type="submit" onClick={ searchForAlbums }>
            Pesquisar
          </button>
        </section>
        {state.loading && 'Carregando...'}
        <div className="album-container">
          {
            !state.fetched
              ? <span id="search-for-artist-span">Pesquise por um artista</span> : (
                <section className="album-section">
                  {state.albumList.map((album) => (
                    <AlbumCard
                      key={ album.collectionId }
                      name={ album.collectionName }
                      thumbnail={ album.artworkUrl100 }
                    />
                  ))}
                </section>
              )
          }
        </div>
      </main>
    </div>
  );
}

export default Search;
