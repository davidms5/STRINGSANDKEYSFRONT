import axios from "axios"

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FILTER_BRAND = 'FILTER_BRAND';
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE"
export const GET_PRODUCT_NAME = 'GET_PRODUCT_NAME'
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

const VITE_LOCAL_HOST = import.meta.env.VITE_LOCAL_HOST;


export const getProducts = () => {

    return async function (dispatch) {
        const response = await axios.get(`${VITE_LOCAL_HOST}/products`);
        const products = response.data;
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    };
};

export function getProductName(name){
    return async function(dispatch){
        try{
            const productName = await axios.get(`${VITE_LOCAL_HOST}/products?name=${name}`);
            return dispatch({
                type:GET_PRODUCT_NAME,
                payload: productName.data,
            });
        } catch (error){
            console.log("Error al obtener el nombre del producto");
        }
    }
}

export const filterBrand = (brand) => {
    return {
        type: FILTER_BRAND,
        payload: brand,
    }
};


export const filterCategory = (category) => {
    return {
        type: FILTER_CATEGORY,
        payload: category,
    }
};

export const orderByPrice = (status) => {
    return {
        type: ORDER_BY_PRICE,
        payload: status,
    }
};

export const getDetailProduct = (id) => {
    return async function (dispatch) {
        try {
            let response = await axios(`http://localhost:3010/products/${id}`);
            return dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: response.data
            })
        } catch (error) {
            throw new Error(error.message)
        }   
    }
}