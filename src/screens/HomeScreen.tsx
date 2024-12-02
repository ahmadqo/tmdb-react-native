/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  Animated,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../store/slices/movieSlice';
import {RootState, AppDispatch} from '../store';
import MovieList from '../components/organisms/MovieList';
import Filter from '../components/organisms/Filter';
import {useDebounce} from '../hooks/useDebounce';
import {serviceSearch, serviceTrending} from '../services/api';

// interface MovieDetailProps {
//   navigation: any;
// }

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    movies,
    loading,
    // error
  } = useSelector((state: RootState) => state.movies);
  const progress = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState<string>('Trending');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(fetchMovies(`${serviceTrending}?language=en-US&page=1`));
  }, [dispatch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const query = `${serviceSearch}?page=1&query=${debouncedSearchTerm}`;
      dispatch(fetchMovies(query));
    } else {
      dispatch(fetchMovies(`${serviceTrending}?language=en-US&page=1`));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(progress, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
      ).start();
    } else {
      progress.setValue(0);
    }
  }, [loading]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <>
      {loading && (
        <Modal transparent={true} animationType="fade" visible={loading}>
          <View style={styles.overlay}>
            <Text style={styles.loadingText}>Loading...</Text>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[styles.progressBar, {width: progressWidth}]}
              />
            </View>
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.navheader}>
            <View>
              <Text style={styles.title}>Hello Ahmad!</Text>
              <Text style={styles.subtitle}>
                Enjoy Your Day by Watching Movies
              </Text>
            </View>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profile}
            />
          </View>
          <View style={styles.search}>
            <Image
              source={require('../assets/images/search.png')} // Ganti dengan path ikon pencarian Anda
              style={styles.iconSearch}
            />
            <TextInput
              placeholder="Search..."
              style={styles.searchInput}
              onChangeText={text => setSearchTerm(text)}
              value={searchTerm}
            />
          </View>
        </View>
        {!debouncedSearchTerm && <Filter setActive={setActive} />}
        <View style={styles.featuredSeries}>
          {debouncedSearchTerm ? (
            <Text style={styles.featuredSeriesTitle}>Search</Text>
          ) : (
            <Text style={styles.featuredSeriesTitle}>{active} Movie</Text>
          )}
          <MovieList movies={movies} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#09090F',
    backgroundColor: '#15141F',
    paddingBottom: 40,
  },
  header: {
    padding: 20,
    // backgroundColor: '#09090F',
    backgroundColor: '#15141F',
    alignItems: 'center',
  },
  navheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#767680',
    borderRadius: 16,
    padding: 10,
    flex: 1,
    height: 52,
    backgroundColor: '#1f1f27',
    color: '#FFF',
    paddingLeft: 40,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },

  featuredSeries: {
    padding: 20,
  },
  featuredSeriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  error: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 20,
  },
  progressBarBackground: {
    width: '80%',
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'orange',
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginRight: 10,
    position: 'absolute',
    zIndex: 10,
    marginLeft: 25,
  },
});

export default HomeScreen;
