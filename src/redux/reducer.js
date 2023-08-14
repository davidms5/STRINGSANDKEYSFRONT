import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import { FILTER_BRAND, GET_PRODUCTS, FILTER_CATEGORY, EMPTY_STATES, ORDER_BY_PRICE, GET_PRODUCT_NAME, GET_PRODUCT_BY_ID, FILTER_PRICE, FILTER_PRICE_NAME, SET_PAGE} from "./actions";
const persistConfig = {
  key: "root",
  //storage: storageSession,
  storage, //esta parte y la de arriba es para usar el localStorage en ves de la ssesion
};

const initialState = {
  products: [],
  filteredProducts: [],
  details: {},
  currentPage: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ORDER_BY_PRICE:
      const { payload } = action;
      let orderPrice;
      if (payload === "Ascendente") {
        orderPrice = state.filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        orderPrice = state.filteredProducts.sort((a, b) => b.price - a.price);
      }
      return { ...state, filteredProducts: [...orderPrice] };

    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_PRODUCT_NAME :
      return {
        ...state,
        filteredProducts:action.payload,
        products:action.payload
        }
    case FILTER_BRAND:
      const productsByBrand =
        action.payload === "todos"
          ? [...state.products]
          : [...state.filteredProducts].filter((el) => el.brand === action.payload);

      return {
        ...state,
        filteredProducts: productsByBrand,
      };
    case FILTER_CATEGORY:
      const productsByCategory =
        action.payload === "todos"
          ? [...state.products]
          : [...state.products].filter((el) => el.category === action.payload);

      return {
        ...state,
        filteredProducts: productsByCategory,
      };
      case FILTER_PRICE:
        const productsByPrice = state.products.filter((el) => {
          if (action.payload.bra) {
            return (
              el.price <= action.payload.val &&
              el.category === action.payload.cat &&
              el.brand === action.payload.bra
            );
          } else if (action.payload.cat) {
            return el.price <= action.payload.val && el.category === action.payload.cat;
          } else {
            return el.price <= action.payload.val;
          }
        });        return {
          ...state,
          filteredProducts: productsByPrice,
        };
      case GET_PRODUCT_BY_ID:
      return {
        ...state, 
        details: action.payload
      };

      case EMPTY_STATES:
        return{
          ...state,
          filteredProducts: [],
        }
    default:
      return { ...state };
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
