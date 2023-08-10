import ProductSimple from "../components/Card"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Box, Flex, Heading, Image, } from "@chakra-ui/react";


const CardsContainer = ()=>{
    return(
        <Box>
            <ProductSimple></ProductSimple>
        </Box>
    )
}


export default CardsContainer;