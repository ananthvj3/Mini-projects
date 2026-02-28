import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from "../images/todolist.avif";
import weather from "../images/weather1.png";
import calculator from "../images/cal2.png";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      
      <section className="w-full max-w-6xl flex flex-col gap-6 
                          sm:flex-row sm:flex-wrap 
                          sm:justify-between lg:justify-around">

        {/* TODO CARD */}
        <div
          onClick={() => navigate("/todolist")}
          className="relative w-[300px] h-[200px] cursor-pointer 
                     rounded-2xl overflow-hidden 
                     backdrop-blur-lg bg-white/20 
                     shadow-2xl hover:scale-105 
                     transition duration-300 flex items-center justify-center"
        >
          <img src={image1} 
               className="absolute w-full h-full object-cover opacity-80" />
          <h1 className="relative text-white text-3xl font-bold tracking-wider">
            TODO LIST
          </h1>
        </div>

        {/* WEATHER CARD */}
        <div
          onClick={() => navigate("/weather")}
          className="relative w-[300px] h-[200px] cursor-pointer 
                     rounded-2xl overflow-hidden 
                     backdrop-blur-lg bg-white/20 
                     shadow-2xl hover:scale-105 
                     transition duration-300 flex items-center justify-center"
        >
          <img src={weather} 
               className="absolute w-full h-full object-cover opacity-80" />
          <h1 className="relative text-white text-3xl font-bold">
            WEATHER
          </h1>
        </div>

        {/* CALCULATOR CARD */}
        <div
          onClick={() => navigate("/calculator")}
          className="relative w-[300px] h-[200px] cursor-pointer 
                     rounded-2xl overflow-hidden 
                     backdrop-blur-lg bg-white/20 
                     shadow-2xl hover:scale-105 
                     transition duration-300 flex items-center justify-center"
        >
          <img src={calculator} 
               className="absolute w-full h-full object-cover opacity-80" />
          <h1 className="relative text-white text-3xl font-bold">
            CALCULATOR
          </h1>
        </div>

      </section>
    </div>
  )
}

export default Home