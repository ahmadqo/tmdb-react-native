import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getMovies} from '../../services/api';
import {MovieResponse} from '../../types/movie';

interface MovieState {
  movies: MovieResponse['results'];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (endpoint: string) => {
    const response = await getMovies(endpoint);
    return response.results;
  },
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export default movieSlice.reducer;
