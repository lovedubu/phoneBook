import {createstore} from "redux"
import reducer from "./reducer/reducer"

let store = createstore(reducer)

export default store