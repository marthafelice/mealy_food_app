//action is an object which must have type and optional payload

import { increment } from "../constants/counterConstants"

// define actionCreator function

function incrementCounter(){
    return {
     type:increment
    }
}

export default incrementCounter;