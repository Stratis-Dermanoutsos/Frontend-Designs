import React from 'react';
import './Stylesheets/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuButton from './components/MenuButton';
import BodyContainer from './components/BodyContainer';
import Form from './components/Form';
import Silhouette from './components/Silhouette';

function App() {
  return (
    <div className="App">
      <MenuButton />
      <p className="mx-5 my-4 px-5">Landing page</p>
      <BodyContainer />
      <Form />
      <Silhouette />
    </div>
  );
}

export default App;
