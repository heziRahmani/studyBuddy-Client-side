import { useEffect,useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


export const useSignIn =(eMail,password)=>{
const [data, setData] = useState([]);
const _navigate=useNavigate()
const auth=getAuth()
const signIn = async (_eMail,_password) => {

  await signInWithEmailAndPassword(auth,_eMail,_password)
  .then((Credential)=>{
    _navigate("/admin/admindashboard");
    sessionStorage.setItem('Auth Token', Credential._tokenResponse.refreshToken);})
  .catch((err)=>console.log(err.message))

};
    

useEffect(() => {
    if (eMail && password ) {
        
        signIn(eMail,password)
    }
     
    }, [eMail,password]);


return {data}
}