import axios from "axios";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { brands, categories } from "./formData";
import { PostProduct } from "../../redux/actions";
import WithSubnavigation from "../../components/NavBar";
import SmallWithLogoLeft from "../../components/Footer";
import { Link } from "react-router-dom";

export default function CreateProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    quantity: "",
    price: "",
    //image
  });

  const [image, setImage] = useState(null);

  //const [error, setError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setImage(file);
  };

  const handleNumbersChange = (value, name) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //if(!image) {
    //    alert("no hay imagen");
    //    return;
    //}
    try {
      const postData = new FormData();
      postData.append("name", form.name);
      postData.append("brand", form.brand);
      postData.append("category", form.category);
      postData.append("description", form.description);
      postData.append("quantity", form.quantity);
      postData.append("price", form.price);
      postData.append("image", image);

      //console.log(image);

      dispatch(PostProduct(postData));

      //setImage(null);

      // setForm({
      // name:"",
      // brand:"",
      // category:"",
      // description:"",
      // quantity:"",
      // price:"",
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box h={"100px"}>
        <WithSubnavigation></WithSubnavigation>
      </Box>
      <Box
        backgroundImage="url('/bg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={"100%"}
        h={"82vh"}
        overflow={"hidden"}
      >
        <VStack h={"80vh"} mt={'1%'}>
          <Heading color={"black"} fontSize={"4vh"}>
            Crear Producto
          </Heading>
          {console.log(form, image)}
          <Flex direction="column" align={"center"} color={"black"} bg={""}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Flex direction="column" align={"center"}>
                  <FormLabel h={'2vh'}>Nombre:</FormLabel>
                  <Input
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <FormLabel h={'2vh'}>Marca:</FormLabel>
                  <Select
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    placeholder="seleccione una marca"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                    required
                  >
                    {brands.map((marca, index) => (
                      <option value={marca} key={index}>
                        {marca}
                      </option>
                    ))}
                  </Select>

                  <FormLabel h={'2vh'}>Categoria:</FormLabel>
                  <Select
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    placeholder="seleccione una categoria"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    {categories.map((categoria, index) => (
                      <option value={categoria} key={index}>
                        {categoria}
                      </option>
                    ))}
                  </Select>

                  <FormLabel h={'2vh'}>Descripcion Del Producto:</FormLabel>
                  <Input
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    h={'8vh'}
                  />

                  <FormLabel h={'2vh'}>Cantidad:</FormLabel>
                  <Input
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    min={0}
                    name="quantity"
                    value={form.quantity}
                    w={"350px"}
                    onChange={
                      (value) =>
                        handleNumbersChange(value, "quantity") /*handleChange*/
                    }
                    required
                  />

                  <FormLabel h={'2vh'}>Precio:</FormLabel>
                  <Input
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    min={0}
                    name="price"
                    value={form.price}
                    w={"350px"}
                    onChange={
                      (value) =>
                        handleNumbersChange(value, "price") /*handleChange*/
                    }
                    required
                  />

                  <FormLabel h={'2vh'} htmlFor="image"> Imagen:</FormLabel>
                  <Input
                  h={'5vh'}
                    _hover={"none"}
                    bg={"white"}
                    border={"2px solid black"}
                    type="file"
                    id="image"
                    name="image"
                    w={"350px"}
                    onChange={handleImageChange}
                  />
                  <br />
                  <Box>
                    <Flex>
                      <Link to={"/admin/edit"}>
                        <Button h={'4vh'} _hover={"none"} color={"#ffa200"} bg={"black"}>
                          Volver
                        </Button>
                      </Link>
                      <Button
                      h={'4vh'} 
                      ml={'3%'}
                        _hover={"none"}
                        color={"black"}
                        bg={"#ffa200"}
                        type="submit"
                      >
                        Crear Producto
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </FormControl>
            </form>
          </Flex>
        </VStack>
      </Box>
      <Box>
        <SmallWithLogoLeft></SmallWithLogoLeft>
      </Box>
    </Box>
  );
}
