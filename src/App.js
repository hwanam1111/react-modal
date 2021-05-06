import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/index';
import reducers from './reducers/index';

import Container from './Container';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Container />      
  </Provider>
);

export default App;
