import axios from "axios";
import { Box, Flex, FormControl, FormLabel, Heading, Input, Select, VStack,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
    Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { brands, categories } from "./formData";
import { PostProduct } from "../../redux/actions";
import Navbar from "../../components/NavBar";
import {Link} from "react-router-dom";

export default function CreateProduct(){

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        description: "",
        quantity: "",
        price: "",
        //image
        
    })

    const [image, setImage] = useState(null);

    //const [error, setError] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevValue => ({...prevValue, [name]: value}));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        setImage(file);
        
    };

    const handleNumbersChange = (value, name) => {
        setForm(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //if(!image) {
        //    alert("no hay imagen");
        //    return;
        //}
        try {
            const postData = new FormData();
            postData.append('name', form.name);
            postData.append('brand', form.brand);
            postData.append('category', form.category);
            postData.append('description', form.description);
            postData.append('quantity', form.quantity);
            postData.append('price', form.price);
            postData.append('image', image);
            
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



    return( 
    <Box>

        <Navbar></Navbar>
        <br />
        <br />
        <Box
         backgroundImage="url('/bg.jpg')" 
         backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="92vh"
        paddingTop={'40px'}
        > 

        <VStack>
            <Heading>crear producto</Heading>
            <br />
                {console.log(form, image)}
            <Flex direction="column" align={'center'} bg={"#ffa200"}>

            <form onSubmit={handleSubmit}>

                <FormControl>
                    <Flex direction="column" align={'center'}>

                        <FormLabel>Nombre:</FormLabel>
                        <Input type="text" name="name" value={form.name} onChange={handleChange} required/>

                        <FormLabel>Marca:</FormLabel>
                        <Select placeholder="seleccione una marca" name="brand" value={form.brand} onChange={handleChange} required>
                            {brands.map((marca, index) => (
                                <option value={marca} key={index}>{marca}</option>
                            ))}
                        </Select>

                        <FormLabel>Categoria:</FormLabel>
                        <Select placeholder="seleccione una categoria" name="category" value={form.category} onChange={handleChange} required>
                                {categories.map((categoria, index) => (
                                    <option value={categoria} key={index}>{categoria}</option>
                                ))}

                        </Select>

                        <FormLabel>Descripcion Del Producto:</FormLabel>
                        <Input type="text" name="description" value={form.description} onChange={handleChange} required/>

                        <FormLabel>Cantidad:</FormLabel>
                        <NumberInput  min={0} name="quantity" value={form.quantity} w={'350px'} onChange={value => handleNumbersChange(value, "quantity") /*handleChange*/} required>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                        <FormLabel>Precio:</FormLabel>
                        <NumberInput  min={0} name="price" value={form.price}  w={'350px'} onChange={value => handleNumbersChange(value, "price") /*handleChange*/} required>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        
                    </Flex>

                    <FormLabel htmlFor="image"> Imagen:</FormLabel>
                    <Input  type="file" id="image" name="image" w={'350px'} onChange={handleImageChange}/>
                    <br/>

                    <Button type="submit">Crear Producto</Button>

                </FormControl>

                

                </form>

            </Flex>
            <br />
            <Button><Link to="/">volver</Link></Button>
        </VStack>
 
        </Box>
    
    </Box>
    );
}