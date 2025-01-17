import Buscador from "./Buscador";
import TablaPeliculas from "./TablaPeliculas";
import React, { useState, useEffect } from "react";

const TMDB_API_KEY = '5a49158a9e37dd2fa067edfc150602d3';
const actorName = 'bruce-willis';

const Screen = () => {
    const [buscador, setBuscador] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleSearch = async () => {
          setLoading(true);
          setError(null);
    
          try {
            // Paso 1: Buscar el ID del actor
            const searchResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${actorName}&language=es`);
            const searchData = await searchResponse.json();
    
            if (searchData.results.length === 0) {
              setError('Actor no encontrado');
              setLoading(false);
              return;
            }
    
            const actorId = searchData.results[0].id;
    
            // Paso 2: Obtener la filmografía del actor
            const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${TMDB_API_KEY}&language=es`);
            const creditsData = await creditsResponse.json();
    
            setMovies(creditsData.cast);
          } catch (error) {
            setError('Error al buscar las películas');
          }
    
          setLoading(false);
        };
        handleSearch();
      }, []);

    const handleChange = (event) => {
      setBuscador(event.target.value);
    };
   const _peliculas = buscador === ""
  //  setMovies = buscador === ""
      ? movies
      : movies.filter(peli =>
        peli.title.toLowerCase().includes(buscador.toLowerCase().trim()) ||
        peli.overview.toLowerCase().includes(buscador.toLowerCase().trim())
      );

    return (
      <div>
        <Buscador onChange={handleChange} />
        <TablaPeliculas peliculas={_peliculas} />
      </div>
    );
  };

  export default Screen;