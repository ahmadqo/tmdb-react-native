import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface MoviePosterProps {
  posterPath: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({posterPath}) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Image
      source={{uri: `${IMAGE_BASE_URL}${posterPath}`}}
      style={styles.poster}
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    borderRadius: 16,
    width: '100%',
    height: undefined,
    aspectRatio: 0.75,
    resizeMode: 'cover',
  },
});

export default MoviePoster;
