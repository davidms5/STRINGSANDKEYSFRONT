import { Box, Flex, Heading, Image, } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";
import SmallWithLogoLeft from "../components/Footer"
import CategoryCards from "../components/HomeCards"

const Home = () => {
  return (
    <Box
    backgroundImage="url('/bg.jpg')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    w={'100%'}
    h={'1920px'}
    >
      <Flex direction={"column"}>
        <WithSubnavigation></WithSubnavigation>
        <Box h={'1860px'} pt={'100px'}>
          <Flex direction={'column'} align={'center'}>
            <Box bg={"#ffa200"} h={'500px'} w={'100%'} align={'center'} pt={'250px'} borderBottom={'3px solid black'}>
              <Heading color={'black'}>CARROUSEL</Heading>
            </Box>
            <br />
            <Box>
              <Heading color={'black'}>¿Qué estás buscando?</Heading>
            </Box>
            <br />
            <br />
            <Box>
              <CategoryCards></CategoryCards>
            </Box>
          </Flex>
        </Box>
        <SmallWithLogoLeft></SmallWithLogoLeft>
      </Flex>
    </Box>
  );
};

export default Home;
