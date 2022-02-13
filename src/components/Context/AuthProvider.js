import React, { useState,createContext,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {auth} from "../../firebase/config"
import {Spin} from 'antd'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const navigate=useNavigate()
    const [ user , setUser] = useState();
    const [isLoading , setIsLoading ] = useState(true)
    useEffect(()=>{
        const unsubcribed = auth.onAuthStateChanged((user)=>{
            console.log({user})
            if(user){
                const { displayName , email , uid, photoURL} = user
                    setUser({ displayName , email , uid, photoURL})
                    setIsLoading(false)
                navigate("/")
            }
            else{
                setUser({});
                setIsLoading(false)
                navigate("/login")
            }
        })
        return ()=>{
            unsubcribed()
        }
    },[navigate])
    console.log(user)
  return <AuthContext.Provider value={{user}}>
      {isLoading?<Spin/>:children}
  </AuthContext.Provider>;
};

export default AuthProvider;
