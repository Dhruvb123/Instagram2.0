import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Content from './Content';
import Signup from './Signup';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <Signup />
      <div className='App1'>
      <Sidebar/>
      <br />
      <Content/>
      </div>
    </div>
  );
}

export default App; 
