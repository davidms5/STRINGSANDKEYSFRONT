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

const IMAGE =
  'https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1026_wht8zz.jpg'

export default function ProductSimple() {
  return (
    <Center py={3}>
      <Box
        role={'group'}
        p={4}
        maxW={'250px'}
        maxH={'400px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
          <Image
            rounded={'lg'}
            maxH={'200px'}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        <Stack pt={3} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Epiphone
          </Text>
          <Heading fontSize={'20px'} fontFamily={'body'} fontWeight={500}>
            Epiphone Black Guitar
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $180000
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199000
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}