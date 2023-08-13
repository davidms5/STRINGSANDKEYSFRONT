import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
  Heading,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  filterBrand,
  orderByPrice,
  filterCategory,
  filterPrice,
} from "../redux/actions";
import { MdGraphicEq } from "react-icons/md";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const FilterAndOrder = () => {
  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.filteredProducts);

  const brandsRaw = filteredProducts.map((el) => el.brand);
  const brands = brandsRaw.filter((item, index) => {
    return brandsRaw.indexOf(item) === index;
  });

  const categoryRaw = filteredProducts.map((el) => el.category);
  const category = categoryRaw.filter((item, index) => {
    return categoryRaw.indexOf(item) === index;
  });

  console.log(brands);

  const handleBrandFilter = (e) => {
    const selectedBrand = e.target.innerText;
    console.log(selectedBrand);
    dispatch(filterBrand(selectedBrand));
  };

  const handleCategoryFilter = (e) => {
    const selectedCategory = e.target.innerText;
    dispatch(filterCategory(selectedCategory));
  };

  const handlePriceFilter = (val) => {
    setSliderValue(val);
    const selectedPrice = val;
    dispatch(filterPrice(selectedPrice));
  };

  const [sliderValue, setSliderValue] = useState(250000);

  const resetInput = () => {
    dispatch(filterCategory("todos"));
  };

  const firstCategory =
    filteredProducts.length > 0 ? filteredProducts[0].category : null;

  const isSingleCategory = filteredProducts.every(
    (product) => product.category === firstCategory
  );

  const firstBrand =
    filteredProducts.length > 0 ? filteredProducts[0].brand : null;

  const isSingleBrand = filteredProducts.every(
    (product) => product.brand === firstBrand
  );

  return (
    <Box bg={"gray.200"} w={"25vh"} color={"black"} rounded={"5px"}>
      <Flex direction={"column"}>
        <Text fontSize={"14px"}>
          {isSingleCategory && isSingleBrand
            ? `Todos los Productos > ${firstCategory} > ${firstBrand}`
            : isSingleCategory
            ? `Todos los Productos > ${firstCategory}`
            : "Todos los Productos"}
        </Text>
        <Heading fontSize={"30px"}>$ {sliderValue}</Heading>
        <Box bg={""} h={"4vh"} w={"90%"} mt={"7%"}>
          <Flex>
            <Slider
              aria-label="slider-ex-4"
              onChange={(val) => handlePriceFilter(val)}
              min={0}
              max={350000}
            >
              <SliderTrack bg="black">
                <SliderFilledTrack bg="#ffa200" />
              </SliderTrack>
              <SliderThumb boxSize={5}>
                <Box color="#ffa200" as={MdGraphicEq} />
              </SliderThumb>
            </Slider>
          </Flex>
        </Box>
        <Box>
          <Flex direction={"column"}>
            {isSingleCategory ? (
              <>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Marcas:
                </Text>
                {brands?.map((el, index) => (
                  <Text
                    key={index}
                    onClick={handleBrandFilter}
                    cursor="pointer"
                    fontSize={"14px"}
                  >
                    {el}
                  </Text>
                ))}
              </>
            ) : (
              <>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Categorias:
                </Text>
                {category?.map((el, index) => (
                  <Text
                    key={index}
                    onClick={handleCategoryFilter}
                    cursor="pointer"
                    fontSize={"14px"}
                  >
                    {el}
                  </Text>
                ))}
              </>
            )}
          </Flex>
        </Box>
        <br />
        <Box>
          <Flex direction={"column"} justify={"center"} mb={"20%"}>
            {/* <select onChange={(e) => dispatch(orderByPrice(e.target.value))}>
              {["Ascendente", "Descendente"].map((e, i) => (
                <option value={e} key={i}>
                  {e}
                </option>
              ))}
            </select> */}
            <Button onClick={() => dispatch(orderByPrice("Ascendente"))}>
              Menor precio
            </Button>
            <Button onClick={() => dispatch(orderByPrice("Descendente"))}>
              Mayor precio
            </Button>
            <br />
            <Button
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              bg={"#ffa200"}
              color={"black"}
              name="reset"
              onClick={() => {
                resetInput();
              }}
            >
              Reset
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default FilterAndOrder;
