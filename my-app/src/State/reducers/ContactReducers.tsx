import { Action } from "../actions";
import { ActionType } from "../actiontypes";

interface User {
    firstname: string;
    lastname: string;
    status: string;
  }
  
  interface UserState {
    usernames: User[]; 
  }
  
  const initialState: UserState = {
    usernames: [], 
  };

const reducer = (state = initialState,action: Action) => {
   switch(action.type){
    case ActionType.CONTACT:
      return {...state,usernames: action.payload}

       default:
        return state
   }
   
};

export { reducer };