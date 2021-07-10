import * as React from 'react';
import ContextWrapper from './context/ContextWrapper';
import Route from './Route';

function App() {
  return (
    <ContextWrapper>
      <Route />
    </ContextWrapper>
  );
}

export default App;
