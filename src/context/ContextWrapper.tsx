import * as React from 'react';
import { ContextAuthProvider } from "./ContextAuth";

function ContextWrapper(props:any){
    return (<></>)
    return(
        <ContextAuthProvider>
            {/* {props.children} */}
        </ContextAuthProvider>
    )
}

export default ContextWrapper;