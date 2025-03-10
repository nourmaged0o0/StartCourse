import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../compounds/Loader";
import cppticket from "../assets/cpp-ticket.png";
import cticket from "../assets/c-ticket.png";
import pyticket from "../assets/python-ticket.png";
import psticket from "../assets/ps-ticket.png";



const Scoreboard = () => {

  const [imgticket,setImg]=useState(cppticket)
  const [courseName,setCourseName] = useState("C++")


  const { groupId } = useParams();

  const [persons, setPersons] = useState([]);

  const getData = () => {
    axios
      .get(
        `https://api.180daraga.com/api/events/startcourse/7-12/persons/${groupId}`
      )
      .then(function (response) {
        setPersons(response.data.message.sort((a, b) => b.Score - a.Score));
      });
  };

  useEffect(() => {
    getData();
    if (groupId.split('-')[0]=="C") {
      setImg(cticket)
      setCourseName("C")
    }
    else if (groupId.split('-')[0]=="Python") {
      setImg(pyticket)
      setCourseName("PYTHON")
    }
    else if (groupId.split('-')[0]=="PS") {
      setImg(psticket)
      setCourseName("PROBLEM SOLVING")
    }
    else if (groupId.split('-')[0]=="CPP") {
      setImg(cppticket)
      setCourseName('C++')
    }
  }, []);


  if (persons.length === 0) {
    return <Loader />;
  }
  
  
  return (
    <>
      <div className='class="flex flex-col items-center bg-hero-pattern w-screen bg-contain"'>
        <div className="flex justify-center py-8 px-8 md:px-16 min-h-screen w-screen backdrop-blur-md">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-start w-full">
              <div className="font-bold w-full flex flex-row justify-between items-center border-1 rounded-lg border-[#700608] shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8c744a,0_0_15px_#8c744a,0_0_15px_#8c744a] text-semiwhite p-5">
                <img
                  src={imgticket}
                  alt="C++ Course"
                  className="sm:w-24 2xs:w-16 3xs:w-16"
                />
                <div className="flex flex-col justify-center items-center text-center text-2xl ml-10 mr-10 md:text-lg md:mr-5 md:ml-5 sm:text-base sm:ml-0 sm:mr-0 xs:text-sm xs:ml-0 xs:mr-0 2xs:ml-0 2xs:mr-0 2xs:text-sm 3xs:text-sm 3xs:ml-0 3xs:mr-0">
                  <h2>{courseName} COURSE</h2>
                  <h3>GROUP {groupId}</h3>
                </div>
                <img
                  src={imgticket}
                  alt="C++ Course"
                  className="sm:w-24 2xs:w-16 3xs:w-16"
                />
              </div>
            </div>

            {
          persons.map((person,conter) => {

            return (

              <div className="flex flex-col justify-start items-center w-full mt-5">
              <div className="font-bold relative flex items-center justify-between w-full text-white px-4 py-4 my-5 border-1 rounded-lg border-[#8c744a] shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8c744a,0_0_5px_#8c744a,0_0_5px_#8c744a]">
                <h1 class="-top-3 -left-3 absolute font-bold px-2 border-1 rounded-full bg-[#8c744a] border-[#8c744a] text-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8c744a,0_0_5px_#08f,0_0_5px_#8c744a]">
                  {++conter}
                </h1>
                <h1 className="text-xl md:text-2xl">{person.name}</h1>
                <span className="text-xl md:text-2xl">{person.Score}</span>
              </div>
            </div>
            )

          })
        }
          </div>
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
