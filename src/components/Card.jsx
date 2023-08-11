'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'


export default function ProductSimple(props) {
  return (
    <Center py={3}>
      <Box
        role={'group'}
        p={2}
        maxW={'90%'}
        h={'33vh'}
        maxH={'40vh'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        overflow={'hidden'}>
          <Image
          pl={'15%'}
            rounded={'lg'}
            maxH={'150px'}
            objectFit={'cover'}
            src={props.image}
            alt="#"
          />
        <Stack pt={3} align={'center'}>
          <Text color={'gray.500'} fontSize={'10px'} textTransform={'uppercase'}>
            {props.brand}
          </Text>
          <Heading fontSize={'15px'} fontFamily={'body'} fontWeight={500}>
            {props.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${props.price}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199000
            </Text> */}
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}