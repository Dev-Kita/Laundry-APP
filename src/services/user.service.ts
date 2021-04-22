import { useDispatch } from "react-redux"

const dispatch = useDispatch();

function login(username:string, password:string){
    if(username === "admin" && password === "123"){
        
    }
}

function logout(){

}

export const userService = {
    login,
    logout
}