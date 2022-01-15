import { createStore } from "redux";
import { reducer } from "./reducers";

export const store = createStore(reducer);

// console.log(store.getTodo());