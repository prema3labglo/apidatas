import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,Link} from "react-router-dom";

import pin from "./images/pin.svg"

export default function Apidatas() {
  const [details, setDetails] = useState({})
  const [viewBtn, setViewBtn] = useState(true)
  const fetching = useNavigate()
  console.log("jjjkf")

  const loadData = () => {
    axios.get("https://reqres.in/api/users?page")
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error))
  }
  const nxtBtnhandle = () => {
    axios.get("https://reqres.in/api/users?page=2")
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error))
    setViewBtn(false)
  }
  const handleCheck = (id) => {
    fetching(`/${id}`)
  }
  useEffect(() => loadData(), [])

  return (
    <div>
      {viewBtn ?

        <button onClick={() => nxtBtnhandle()}>next</button> :
        <button onClick={() => loadData()}>previous</button>}
      {details.data?.map((profile, index) => {
        return (
          <div className="card">
            <ul key={index}>
              <p >Id:{profile.id}</p>
              <p onClick={() => handleCheck(profile.id)}> <img src={pin} height='50px' /></p>
              <p ><Link to={`/${profile.id}`}>{profile.first_name} {profile.last_name}</Link></p>
              <p>first_name:{profile.first_name}</p>
              <p>last_name:{profile.last_name}</p>
              <p>email:{profile.email}</p>
              
            </ul>
           
          </div>
        )
      })}
    </div>
  )
}