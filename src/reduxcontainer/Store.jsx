import { createStore } from "redux";
import BookReducer from "./BookReducer";
// // store hame ak method provide karta h createstore
// create store accept a parameter that is reducer
const store=createStore(BookReducer)


export default store;

// it is for the redux App paste
    // <Provider store={store}> 
    //  <BookContainer/>
    // </Provider>