// Official (components | stylesheets)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// My components
import MyNavbar from './components/Navbar';
import Section from './components/Section';
import SectionType from './components/SectionType';

// Stylesheets
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Section section={SectionType.HOME} />
      <Section section={SectionType.SERVICES} />
      <Section section={SectionType.ABOUT} />
    </div>
  );
}

export default App;
