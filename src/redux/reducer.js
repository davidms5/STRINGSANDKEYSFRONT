import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  //storage: storageSession,
  storage, //esta parte y la de arriba es para usar el localStorage en ves de la ssesion
};


const initialState = {}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {}
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;