import React, { use, useState } from "react";
import './Styles.css'

export default function Form({ setDescription, onAddItem, onDeleteItem }) {

    const [descriptionValue, setDescriptionValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (descriptionValue.trim()) {
            setDescription(descriptionValue);
        }
    }

    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim()) {
            onAddItem(inputValue);
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Create an item"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className="create-btn" type="button" onClick={handleAddItem}>Create</button>

            <p></p>
            <input
                type="text"
                placeholder="Update description"
                onChange={(event) => setDescriptionValue(event.target.value)}
            />
            <button className="update-btn" onClick={handleSubmit}>Update</button>
        </form>
    )
}