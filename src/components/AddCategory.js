import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        //console.log('aqui haciendo las pruebas');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('submit hecho')
        if (inputValue.trim().length > 2) {
            setCategories(categorias => [inputValue, ...categorias ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <p>{inputValue}</p> */}
            <input
                placeholder='Escriba lo que desea buscar y luego presione enter'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className='form-control'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
