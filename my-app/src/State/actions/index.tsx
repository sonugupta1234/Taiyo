import { UserArray } from "../../userTypes"
import { ActionType } from "../actiontypes"



interface ContactAction {
    type: ActionType.CONTACT,
    payload: UserArray
}


export type Action = ContactAction