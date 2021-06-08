import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit= (e) => {
        e.preventDefault();

        if(inputValue.length > 2){
            setCategory( categoria => [inputValue,...categoria]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input  type="text"
                    value={inputValue}
                    onChange={handleInputChange}/>  
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
