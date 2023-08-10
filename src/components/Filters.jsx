import { Box, Flex } from "@chakra-ui/react";
import { filterBrand } from "../redux/actions";

import { useDispatch, useSelector } from "react-redux";

const FilterAndOrder = () => {

  const dispatch = useDispatch();  
  const filteredProducts = useSelector((state) => state.filteredProducts);

  const brands = filteredProducts.map(el=>el.brand);

  const handleBrandFilter = (e) => {
    const selectedBrand = e.target.value;

    dispatch(filterBrand(selectedBrand));
    
  };

  return (
    <Box>
      <Flex></Flex>
    </Box>
  );
};

export default FilterAndOrder;
