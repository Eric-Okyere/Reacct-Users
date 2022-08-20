import {createStore} from "redux"
import usersReducer from "../reducers/usersReducer"



let Store= createStore(usersReducer);

export default Store;