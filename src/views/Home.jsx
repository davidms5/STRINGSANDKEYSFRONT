import { Box, Flex, Heading, Image, } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";
import SmallWithLogoLeft from "../components/Footer"
import CategoryCards from "../components/HomeCards"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyStates } from "../redux/actions";

const Home = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(emptyStates())
  // })

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
            <Box h={'600px'} w={'100%'} align={'center'} borderBottom={'3px solid black'} overflow={'hidden'}>
              <Image  src="/slider2.jpg"></Image>
            </Box>
            <br />
            <Box>
              <Heading color={'black'}>Nuestros Productos</Heading>
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
