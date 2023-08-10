import { Box, Flex, Heading, Image, } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";
import SmallWithLogoLeft from "../components/Footer"

const Products = () => {
    return (
        <Box
        backgroundImage="url('/bg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={'100%'}
        h={'100vh'}
        overflow={'hidden'}
        >
            <Flex direction={'column'}>
            <WithSubnavigation></WithSubnavigation>
            <Box
            h={'93vh'} pt={'150px'}
            >
                <Flex justify={'space-around'}>
                    <Box color={'black'} bg={'gray.200'} w={'15%'} h={'40vh'} rounded={'5px'}>FILTERS</Box>
                    <Box color={'black'} bg={'gray.200'} w={'70%'} h={'70vh'} rounded={'5px'} >PRODUCTS</Box>
                    <Box color={'black'} bg={'gray.200'} w={'10%'} h={'70vh'} rounded={'5px'} overflow={'hidden'}>
                        <Image src="/banner3.jpg"></Image>
                    </Box>
                </Flex>
            </Box>
            <SmallWithLogoLeft></SmallWithLogoLeft>
            </Flex>
        </Box>
    )
}

export default Products;