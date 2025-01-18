import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import axios from "axios"
import { useLocation,useNavigate} from 'react-router-dom'
export const PrivateRouter = ({children}) => {

  const[privacy,setprivacy]=React.useState(true)
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location,"location")

  location.state=location.pathname
  const state=useSelector((state)=>state)
    console.log(Cookies.get("token"),"inprivate route")
    console.log(Cookies.get("refreshToken"),"also")

    React.useEffect(()=>{
      axios.post("https://onemgbackend.herokuapp.com/verifytoken",{token:Cookies.get("token"),refreshToken:Cookies.get("refreshToken"),username:state.username})
      .then((data)=>{
        console.log(data.data.message,"all inside private")
        if(data.data.message=="update needed")
        {
          Cookies.set("token",data.data.token)
          Cookies.set("refreshToken",data.data.refreshToken)
          setprivacy(true)
        }
        else if(data.data.message=="login required")
        {
          navigate("/login",{replace:true})
        }
      })
    },[])
  return (
    children
  )
}
