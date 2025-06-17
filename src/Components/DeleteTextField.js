import React, { useState } from "react";

export default function DeleteTextField() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <input
            type="text"
            placeholder="type a string"
            value={inputValue}
            onChange={handleChange}
        />
    )
}