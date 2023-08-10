import axios from "axios";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FILTER_BRAND = 'FILTER_BRAND';

const LOCAL_HOST = import.meta.env.LOCAL_HOST;

export const getProducts = () => {
    return async function(dispatch) {
        const response = await axios.get(`${LOCAL_HOST}/products`);
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


