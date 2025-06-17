import React, { useState } from "react";

export default function UpdateTextField() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <>
            <input
                type="text"
                placeholder="replace me..."
                value={inputValue}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="replace with..."
                value={inputValue}
                onChange={handleChange}
            />
        </>
    )
}