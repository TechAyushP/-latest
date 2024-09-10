import { buybook } from "./BookTypes";

//aplication ka jo state hota h vo ak single  object me hota h or usme hamari property hongi
const initialstate={
    NumberofBook:20
}
// ab reducer ko defined karna h hame jo ki function hota h
//yeh 2 parameter ko accept karta h state or action iske andr ham switch statement likhte h 
const BookReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case buybook: return{
            ...state, NumberofBook:state.initialstate-1
        }
            
            
    
        default: return state
            
    }

}
export default BookReducer; 