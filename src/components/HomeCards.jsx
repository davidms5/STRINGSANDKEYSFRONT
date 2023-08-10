import {
  Box,
  Link,
  SimpleGrid,
  Text,
  Image,
  Heading,
  textDecoration,
} from "@chakra-ui/react";

export default function CategoryCards() {
  return (
    <Box h={"800px"} w={"1300px"} align={"center"}>
      <SimpleGrid columns={5} row={2} spacing={20}>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Afinadores
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1001_rx2ca0.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Correas
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1005_piq59k.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Fundas
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928515/StringsAndKeys/1011_hynib2.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Púas
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1013_w6vdpp.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Cables
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928516/StringsAndKeys/1016_sbqdew.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Teclados
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1021_kodwap.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text color={"black"} fontSize={"20px"} fontWeight={"700"}>
            Instrumentos de Cuerda
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928517/StringsAndKeys/1026_wht8zz.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text color={"black"} fontSize={"20px"} fontWeight={"700"}>
            Instrumentos de Viento
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928519/StringsAndKeys/1043_roo9gt.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Amplificadores
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1049_qfmpgg.jpg"></Image>
          </Link>
        </Box>
        <Box bg="#ffa200" height="200px" w={"200px"} rounded={"10px"}>
          <Text
            mt={"15px"}
            h={"45px"}
            color={"black"}
            fontSize={"20px"}
            fontWeight={"700"}
          >
            Baterías y Percusión
          </Text>
          <Link href={"/products"}>
            <Image src="https://res.cloudinary.com/dlmr7znxt/image/upload/v1690928520/StringsAndKeys/1052_dvhx0o.jpg"></Image>
          </Link>
        </Box>
        <Link
          href={"/products"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Box
            mt={"50px"}
            bg={"black"}
            w={"1305px"}
            h={"100px"}
            rounded={"10px"}
          >
            <Heading pt={"25px"} color={"white"}>
              TODOS NUESTROS PRODUCTOS
            </Heading>
          </Box>
        </Link>
      </SimpleGrid>
      <br />
      <br />
      <Image h={"250px"} src="/ads.png"></Image>
    </Box>
  );
}
