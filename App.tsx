import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {MovieProvider} from './src/context/MovieContext';
import AppNavigator from './src/navigation';

const App: React.FC = () => (
  <Provider store={store}>
    <MovieProvider>
      <AppNavigator />
    </MovieProvider>
  </Provider>
);

export default App;
