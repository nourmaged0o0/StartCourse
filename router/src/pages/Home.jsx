import React, { useEffect, useState } from 'react'
import Card from '../compounds/Card'
import clogo from '../assets/c.png'
import cpplogo from '../assets/cpp.png'
import pythonlogo from '../assets/python.png'
import pslogo from '../assets/ps.png'
import axios from 'axios'
import logo from '../assets/logo.png'
import startcourse from '../assets/start course.png'
import Loader from '../compounds/Loader'



const Home = () => {

  const [data, setData] = useState(null)

  const getData = () => {
    axios.get('https://api.180daraga.com/api/events/startcourse/7-12/groups')
      .then(function (response) {
        setData(response.data.message);
      })
  }

  useEffect(() => {
    getData()
  }, []);

  if (!data) {
    return <><Loader/></>
  }
  return (
    <div className="w-screen bg-hero-pattern bg-contain flex flex-col  justify-center items-center">
      <div className='w-screen backdrop-blur-md flex flex-col justify-center items-center'>
      <div className='bg-transparent h-[10rem] w-[60%] justify-between self-start items-start flex my-5 mx-6' >
      <img src={logo} className='h-[80%]' />
      <img src={startcourse} className='h-[100%]  ' />
      </div>
      <div className='h-[90%] w-[90%] bg-transparent flex justify-center items-center gap-7 flex-wrap'>
        <Card logo={cpplogo} groups={data} type="CPP" />
        <Card logo={clogo} groups={data} type="C" />
        <Card logo={pythonlogo} groups={data} type="Python" />
        <Card logo={pslogo} groups={data} type="PS" />

      </div>
      </div>
    </div>
  )
}

export default Home