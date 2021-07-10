import * as React from "react";
import { ContextAuthProvider } from "./ContextAuth";

function ContextWrapper(props){
    return(
        <ContextAuthProvider>
            {/* {props.children} */}
        </ContextAuthProvider>
    )
}

export default ContextWrapper;