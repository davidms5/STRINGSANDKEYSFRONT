import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductName, getProductNamePrice, setPage } from '../redux/actions';
import { Input } from '@chakra-ui/react';
import {useLocation} from "react-router-dom";


const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const location = useLocation()

    function handlerInput(e) {
        const searchInput = (e.target.value)
        setName(searchInput);
        //dispatch(getProductName(searchInput));
    }


    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getProductName(name));
        dispatch(getProductNamePrice(name));
        setName("");
        if(location.pathname != "/products")
        {
        window.location.href = `/products?search=${encodeURIComponent(name)}`};
        dispatch(setPage(0))
    }

    return (
        <div>
            <Input 
                w={'80%'} 
                bg={'white'} 
                color={'black'}
                mr={'2%'} 
                placeholder='Busca tu Instrumento' 
                _placeholder={{ opacity: 1, color: 'gray.500' }} 
                onChange={(e) => { handlerInput(e) }}
                value={name}
            />

            <button
                w={'400px'}
                bg={'white'}
                color={'black'}
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                onClick={(e) => handlerSubmit(e)}
                type="submit"
            >
                Buscar
            </button>
        </div>
    );
};




export default SearchBar;