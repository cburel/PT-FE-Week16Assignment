import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';


export default function App() {

  const [description, setDescription] = useState("Hello, World!");

  return (
    <div>
      <Form setDescription={setDescription} />
      <List description={description} />
    </div>
  );
}
