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
import { filterBrand } from "../redux/actions";
import { MdGraphicEq } from "react-icons/md";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const FilterAndOrder = () => {

  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.filteredProducts);


  const brands = filteredProducts.map((el) => el.brand);

  const handleBrandFilter = (e) => {
    const selectedBrand = e.target.value;
    dispatch(filterBrand(selectedBrand));
  };

  const [sliderValue, setSliderValue] = useState(250000);


  return (
    <Box>
      <Flex direction={"column"}>
        <Text>{filteredProducts.length>50? "Todos los Productos" : filteredProducts[0].category}</Text>
        <Heading fontSize={"30px"}>$ {sliderValue}</Heading>
        <Box bg={""} h={"300px"} w={"90%"} mt={"7%"}>
          <Flex>
            <Slider
              aria-label="slider-ex-4"
              onChange={(val) => setSliderValue(val)}
              min={0}
              max={500000}
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
          <Flex justify={'center'} justifyContent={'space-around'}>
          <Button
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            bg={"#ffa200"}
            color={"black"}
            onClick={''}
            name="reset"
          >
            Reset
          </Button>
          <Button
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            bg={"#ffa200"}
            color={"black"}
            onClick={''}
            name="buscar"
          >
            Buscar
          </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default FilterAndOrder;
