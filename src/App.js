import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
  ]);

  const addItem = (newItemName) => {
    console.log("Created!");
    const newItem = { id: items.length + 1, name: newItemName };
    setItems(prevItems => [...prevItems, newItem]);
  }

  const deleteItem = (idToDelete) => {
    console.log("Deleted!")
    setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
  }

  const [description, setDescription] = useState("Hello, World!");

  return (
    <div>
      <Form setDescription={setDescription} onAddItem={addItem} onDeleteItem={deleteItem} />
      <List description={description} items={items} onDeleteItem={deleteItem} />
    </div>
  );
}
