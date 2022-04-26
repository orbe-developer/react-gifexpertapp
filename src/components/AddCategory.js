
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    // const [inputValue, setInputValue] = useState(); // useState() equals undefined, this causes an error
    const [inputValue, setInputValue] = useState(''); // to avoid the error, use ''

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the page from being fully refreshed

        if (inputValue.trim().length > 0) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
