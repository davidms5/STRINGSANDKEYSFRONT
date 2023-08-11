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
  const [priceInput, setPriceInput] = useState("");

  const handlePriceInput = (e) => {
    const { value } = e.target;
    setPriceInput(value);
  };

  const handleFilters = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Flex direction={"column"}>
        <Heading fontSize={"30px"}>$ {sliderValue}</Heading>
        <Box bg={""} h={"200px"} w={"90%"} mt={"7%"}>
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
            onClick={handleFilters}
            name="reset"
          >
            Reset
          </Button>
          <Button
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            bg={"#ffa200"}
            color={"black"}
            onClick={handleFilters}
            value={priceInput}
            name="price"
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
