import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import "../App.css"

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 
                         bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                         shadow-lg">

        <nav className="max-w-7xl mx-auto px-6 py-4 
                        flex items-center justify-between text-white">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            🚀 Mini Projects
          </h1>

          {/* Links */}
          <div className="flex gap-6 text-lg font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition duration-300 ${
                  isActive ? "text-yellow-300 underline" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/todolist"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition duration-300 ${
                  isActive ? "text-yellow-300 underline" : ""
                }`
              }
            >
              Todo
            </NavLink>

            <NavLink
              to="/weather"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition duration-300 ${
                  isActive ? "text-yellow-300 underline" : ""
                }`
              }
            >
              Weather
            </NavLink>

            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition duration-300 ${
                  isActive ? "text-yellow-300 underline" : ""
                }`
              }
            >
              Calculator
            </NavLink>

          </div>
        </nav>
      </header>

      
    </>
  )
}

export default Navbar