import { Box, Flex } from "@chakra-ui/react";
import WithSubnavigation from "../components/NavBar";

const Home = () => {
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
      <Flex direction={"column"}>
        <WithSubnavigation></WithSubnavigation>
        <Box boxSize={'100vh'}>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
