import ProductSimple from "../components/Card"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Box, Flex, Heading, Image, } from "@chakra-ui/react";


const CardsContainer = () => {
    const allproducts = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(0);
    const productPerPage = 10;
    const totalPages = Math.ceil(allproducts.length / productPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };


    return (
        <Box>
            <div>
                <button
                    
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                >
                    ←
                </button>
                <button >
                    Page {currentPage + 1} of {totalPages}
                </button>
                <button
                    
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                >
                    →
                </button>
            </div>
            <ProductSimple></ProductSimple>
        </Box>
    )
}


export default CardsContainer;