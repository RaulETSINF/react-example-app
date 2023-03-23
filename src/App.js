import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ObjectList from './ObjectList';
import ObjectDetail from './ObjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ObjectList} />
        <Route path="/object/:id" component={ObjectDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
