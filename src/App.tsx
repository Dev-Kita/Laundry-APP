import * as React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Route from './Route';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
