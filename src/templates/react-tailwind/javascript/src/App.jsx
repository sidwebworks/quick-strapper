import React, { useState } from "react"
import logo from "./assets/logo.svg"

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(true)

  return (
    <section className={`${isDark && "dark"}`}>
      <header className="font-sans font-semibold w-full transition-all pt-16 duration-400 ease-in-out h-screen text-lg lg:text-2xl text-center  text-gray-800 dark:text-[#61DAFB] bg-gray-100 dark:bg-gray-900">
        <figure className="w-56 mx-auto lg:w-80 animate-spin-slow">
          <img src={logo} className="w-auto animate-pulse" alt="logo" />
        </figure>

        <p>⚡️Vite + React + Tailwind</p>
        <div className="relative flex items-center mx-auto my-6 space-x-4 text-base font-semibold md:text-lg max-w-max z-5">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md dark:bg-gray-700"
            onClick={() => setCount(count => count + 1)}
          >
            Count is: {count}
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-md dark:bg-gray-700"
            onClick={() => setIsDark(isDark => !isDark)}
          >
            Toggle Theme
          </button>
        </div>

        <p className="my-8 text-sm font-semibold md:text-base">
          <a
            href=" https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Docs
          </a>
          {" | "}
          <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
            React Docs
          </a>
          {" | "}
          <a href="https://vitejs.dev/guide" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
        <p className="text-base font-medium ">
          Made with <span className="text-red-700 fill-current">&#10084;</span>{" "}
          <a
            className="transition-opacity hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sid_web_works/"
          >
            @sid_web_works
          </a>
        </p>
      </header>
    </section>
  )
}

export default App
