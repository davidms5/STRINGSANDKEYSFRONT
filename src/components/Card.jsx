"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function ProductSimple(props) {

  const truncatedName = props.name.length > 50 ? `${props.name.substring(0, 30)}...` : props.name;

  return (
    <Center py={2}>
      <Box
        role={"group"}
        pb={"50%"}
        maxW={"90%"}
        h={"35vh"}
        maxH={"40vh"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={4}
      >
        <Flex direction={"column"}>
          <Box>
          <Image
          h={'20vh'}
            rounded={"lg"}
            src={props.image}
            alt="#"
          />
          </Box>
          <Stack align={"center"} spacing={0}>
            <Text
              color={"gray.500"}
              fontSize={"10px"}
              textTransform={"uppercase"}
            >
              {props.brand}
            </Text>
            <Heading h={'5vh'} fontSize={"70%"} fontFamily={"body"} fontWeight={500}>
              {truncatedName}
            </Heading>
            <Text fontWeight={800} fontSize={"3vh"}>
                ${props.price}
              </Text>
          </Stack>
        </Flex>
      </Box>
    </Center>
  );
}
