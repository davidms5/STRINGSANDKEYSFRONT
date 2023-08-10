import axios from "axios"

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FILTER_BRAND = 'FILTER_BRAND';

const VITE_LOCAL_HOST = import.meta.env.VITE_LOCAL_HOST;


export const getProducts = () => {

    return async function(dispatch) {
        const response = await axios.get(`${VITE_LOCAL_HOST}/products`);
        const products = response.data;
        dispatch({
            type:GET_PRODUCTS,
            payload:products
        })
    };
};

export const filterBrand = (brand) => {
    return {
        type: FILTER_BRAND,
        payload: brand,
    }
};


