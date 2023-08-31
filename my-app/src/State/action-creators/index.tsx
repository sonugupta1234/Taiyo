import { ThunkAction } from "redux-thunk";
import { ActionType } from "../actiontypes"
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import { RootState } from "../reducers";
import { UserArray } from "../../userTypes";

 type Thunk = ThunkAction<void, RootState, null, Action>;


export const UserDetails= (users: UserArray): Thunk => {
     return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.CONTACT,
            payload: users
        })
     }
}

