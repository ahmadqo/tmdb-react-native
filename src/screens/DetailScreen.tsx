// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
// import {RouteProp} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {getMovies} from '../services/api';
// import MoviePoster from '../components/atoms/MoviePoster';

// // Define the type for the route and navigation params
// type RootStackParamList = {
//   MovieList: undefined;
//   Detail: {movieId: number};
// };

// type MovieDetailScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Detail'
// >;
// type MovieDetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// interface MovieDetailProps {
//   navigation: MovieDetailScreenNavigationProp;
//   route: MovieDetailScreenRouteProp;
// }

// const MovieDetail: React.FC<MovieDetailProps> = ({route}) => {
//   const {movieId} = route.params;
//   const [movie, setMovie] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await getMovies(`/movie/${movieId}`);
//         const data = response;
//         setMovie(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   console.warn('movie', movie);

//   return (
//     <View style={styles.container}>
//       {/* <Image
//         source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
//         style={styles.image}
//       /> */}
//       {/* <MoviePoster posterPath={movie.poster_path} /> */}
//       <Text style={styles.title}>Detail</Text>
//       {/* <Text style={styles.overview}>asxdasd</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#000',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 24,
//     color: '#fff',
//     marginTop: 16,
//   },
//   overview: {
//     fontSize: 16,
//     color: '#ccc',
//     marginTop: 8,
//   },
// });

// export default MovieDetail;
