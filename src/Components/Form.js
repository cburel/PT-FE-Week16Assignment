import React, { useState } from "react";

export default function Form({ setDescription }) {

    const [descriptionValue, setDescriptionValue] = useState("hello")

    const handleSubmit = (event) => {
        event.preventDefault();
        setDescription(descriptionValue);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Create an item"
            />
            <button onClick={handleSubmit}>Create</button>
            <input
                type="text"
                placeholder="Delete an item"
            />
            <button onClick={handleSubmit}>Delete</button>
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