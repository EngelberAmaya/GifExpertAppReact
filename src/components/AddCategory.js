import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit hecho')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory
