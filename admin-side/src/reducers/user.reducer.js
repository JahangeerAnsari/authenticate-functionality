import { registerationConstant } from "../actions/constant";

const initialState = {
    userData: '',
    loading:true,
   error: null
}
const userReducer = (state = initialState , action) =>{
    // return always new state from current state
// return state+1 
 console.log("----> hello", action);
 switch(action.type){
     case registerationConstant.USER_RESISTERATATION_REQUEST:
         state = {
             ...state,
             loading: true
         }
         break;

         case registerationConstant.USER_RESISTERATATION_SUCCESS:
         state = {
             ...state,
             loading: false,
             action :  action.payload.message
         }
         break;
         case registerationConstant.USER_RESISTERATATION_FAILURE:
            state = {
                ...state,
                loading: false,
                error :  action.payload.error
            }
            break;



         default:
            break;
    
 }

//  return always new state
 return state

}
export default userReducer