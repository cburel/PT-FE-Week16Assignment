import React, { use, useState } from "react";

export default function Form({ setDescription, onAddItem, onDeleteItem }) {

    const [descriptionValue, setDescriptionValue] = useState("hello")

    const handleSubmit = (event) => {
        event.preventDefault();
        setDescription(descriptionValue);
    }

    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim()) {
            onAddItem(inputValue);
            setInputValue('');
        }
    }

    const handleDeleteItem = (id) => {
        onDeleteItem(id);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Create an item"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="button" onClick={handleAddItem}>Create</button>

            <p></p>
            <input
                type="text"
                placeholder="Update description"
                onChange={(event) => setDescriptionValue(event.target.value)}
            />
            <button onClick={handleSubmit}>Update</button>
        </form>
    )
}