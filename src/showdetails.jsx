import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Showdetails() {
  const [datas, setDatas] = useState()
  const { id } = useParams()
  const getData = () => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => setDatas(response.data))
      .catch((error) => console.log(error))

  }
  
  useEffect(() => { getData() }, [])

  return (
    <>
      <p><img alt="image" src={datas?.data.avatar} /></p>
      <p>id:{datas?.data.id}</p>
      <p>first_name: {datas?.data.first_name}</p>
      <p>last_name:{datas?.data.last_name}</p>
      <p>email:{datas?.data.email}</p>

    </>
  )
}