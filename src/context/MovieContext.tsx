import React, {createContext, useState, ReactNode, useContext} from 'react';
import {Movie} from '../types/movie';

interface MovieContextProps {
  favoriteMovies: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavoriteMovies(prev => [...prev, movie]);
  };

  const removeFavorite = (movieId: number) => {
    setFavoriteMovies(prev => prev.filter(movie => movie.id !== movieId));
  };

  return (
    <MovieContext.Provider
      value={{favoriteMovies, addFavorite, removeFavorite}}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
