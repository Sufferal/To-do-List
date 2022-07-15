import React from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Form />
      <List />
      <Footer />
    </div>
  );
}

export default App;
