import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./00-components/Rating";
import Accordion from "./00-components/Accordion";

function App() {
  return (
    <div className="App">
      <Rating value={4}/>
      <Accordion title={"Menu"} body={[1,4,5,6]} />
    </div>
  );
}

export default App;
