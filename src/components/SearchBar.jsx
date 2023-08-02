import React from 'react'
import { Input } from '@chakra-ui/react'


const SearchBar = () => {
    return (
        <Input w={'400px'} bg={'white'} color={'black'} placeholder='Buscar' _placeholder={{ opacity: 1, color: 'gray.500' }} />
    );
};


export default SearchBar;