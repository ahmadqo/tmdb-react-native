import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MovieCard from '../molecules/MovieCard';
import {Movie} from '../../types/movie';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
  // const [page, setPage] = useState<number>(1);
  // const [totalPages, setTotalPages] = useState<number>(0);

  const handleCardClick = (id: number) => {
    console.log(id);
    // navigation.navigate('Detail', {movieId: id});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <MovieCard
            id={item.id}
            title={item.title}
            posterPath={item.poster_path}
            voteAverage={item.vote_average}
            onPress={() => handleCardClick(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.pagination}>
        <TouchableOpacity
          onPress={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}>
          <Text
            style={[styles.pageButton, page === 1 && styles.disabledButton]}>
            Previous
          </Text>
        </TouchableOpacity>
        <Text style={styles.pageText}>
          Page {page} of {totalPages}
        </Text>
        <TouchableOpacity
          onPress={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}>
          <Text
            style={[
              styles.pageButton,
              page === totalPages && styles.disabledButton,
            ]}>
            Next
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  list: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  pageButton: {
    fontSize: 16,
    color: 'oranges',
  },
  pageText: {
    fontSize: 16,
    color: '#FFF',
  },
  disabledButton: {
    color: '#ccc',
  },
});

export default MovieList;
