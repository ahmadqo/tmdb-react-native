import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  //  Button,
} from 'react-native';
import MoviePoster from '../atoms/MoviePoster';
// import {useMovieContext} from '../../context/MovieContext';

interface MovieCardProps {
  title: string;
  posterPath: string;
  voteAverage: number;
  id: number;
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  voteAverage,
  // id,
  onPress,
}) => {
  // const {addFavorite} = useMovieContext();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MoviePoster posterPath={posterPath} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>⭐ {voteAverage}</Text>
      {/* <Button
        title="Add to Favorites"
        onPress={() =>
          addFavorite({
            id,
            title,
            poster_path: posterPath,
            vote_average: voteAverage,
            overview: '',
            release_date: '',
          })
        }
      /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 30,
    overflow: 'hidden',
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  rating: {
    marginTop: 4,
    color: 'gray',
  },
});

export default MovieCard;
