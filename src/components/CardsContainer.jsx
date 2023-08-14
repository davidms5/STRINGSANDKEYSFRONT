import ProductSimple from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import {Link} from "react-router-dom";
//import {setPage} from "../redux/actions"

//alert//
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

//alert//

const CardsContainer = () => {

  const dispatch = useDispatch();

  const allproducts = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts)
  //const filteredPage = useSelector((state) => state.currentPage)

  const [currentPage, setCurrentPage] = useState(0);
  const productPerPage = 10;
  const totalPages = filteredProducts? Math.ceil(filteredProducts.length / productPerPage) : Math.ceil(allproducts.length / productPerPage);

  const displayedProducts = filteredProducts? filteredProducts.slice(
    currentPage * productPerPage,
    (currentPage + 1) * productPerPage
  ) : 
  allproducts.slice(
    currentPage * productPerPage,
    (currentPage + 1) * productPerPage
  );

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
      <Box>
        <Flex justify={'center'}>
          <div>
            <button onClick={handlePrevious} disabled={currentPage === 0}>
              ←
            </button>
            <button>
              Page {currentPage + 1} of {totalPages}
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
            >
              →
            </button>
          </div>
        </Flex>
      </Box>
      <Box>
        <Flex>
          <SimpleGrid columns={5} bg={""} w={"100%"} h={"100%"}>
            {
              displayedProducts?.length ? (
                displayedProducts.map((product) => {
                  return (
                    <Link key={product.id} to={`/detail/${product.id}`}>
                    <ProductSimple
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      brand={product.brand}
                      price={product.price}
                    />
                    </Link>
                  );
                })
              ) : (
                <Box
                  mt={'10vh'}
                  p={'10px'}
                  display='flex'
                  gridColumn={3}
                  gridRow={2}
                  
                >
                  <Alert
                    status="success"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    height="200px"
                    borderRadius='10px'
                  >
                    <Search2Icon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                      Sin Resultados!
                    </AlertTitle>
                    <AlertDescription maxWidth="sm">
                      No hay productos que coincidan con tu busqueda.
                    </AlertDescription>
                  </Alert>
                </Box>
              )
            }
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardsContainer;
