import * as React from 'react';
import { AuthProvider } from "./AuthContext";

// place for all context
function ContextWrapper(props: any) {
    return (
        <AuthProvider>
            {props.children}
        </AuthProvider>
    )
}

export default ContextWrapper;