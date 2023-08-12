import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductName } from '../redux/actions';
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInput(e){
        //e.preventDefaut()
        setName(e.target.value)
        dispatch(getProductName(name))
    }

    function handlerSubmit(e){
        dispatch(getProductName(e.target.value))
        setName("")
    }
    //console.log(name)
    return (

        <div>
            <Input 
            w = {'80%'} 
            bg = {'white'} 
            color = {'black'}
            mr={'2%'} 
            placeholder='Busca tu Instrumento' 
            _placeholder={{ opacity: 1, color: 'gray.500' }} 
            onChange={(e)=>{handlerInput(e)} }
            value={name}
            />

            <Link to={`/products?name=${name}`}>
                <button 
                    w={'400px'} 
                    bg={'white'} 
                    color={'black'} 
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    onClick={(e)=>handlerSubmit(e)}
                    type="submit"
                    >Buscar
                    
                </button>
            </Link>

        </div>
        
    );
};


export default SearchBar;