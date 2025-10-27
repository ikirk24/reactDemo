import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar () {

    const [theme, setTheme] = useState("light");

        const toggleTheme = () => {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark")
        }

    return (

         <nav className=" transitions-colors duration-900 w-auto flex justify-between items-center pt-7 pb-10 font-gruppo ">
            <p className="transitions-colors duration-900 pl-20 text-5xl text-black dark:text-white ">Ian Kirk</p>
            <ul className=" transitions-colors duration-900 flex gap-10 text-xl pr-20 text-black dark:text-white" >
                <Links text={<Link to={'/reactDemo'}>Home</Link>}/>
                <Links text={<Link to={'/about'}>About</Link>}/>
                <Links text={"Projects"}/>
                <Links text={"Contacts"}/>
            </ul>
            <div className="pr-10 pl-0 mr-20 bg-black rounded-full ease-in-out duration-400 dark:bg-white dark:pr-0 dark:pl-10">
            <button onClick={toggleTheme} className="transitions-colors duration-400 text-xl rounded-full shadow-lg px-3 py-1 text-black bg-white hover:cursor-pointer hover:bg-gray-500 hover:text-white dark:hover:text-orange-400 dark:px-3 dark:bg-black dark:text-white">{theme === "light" ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}</button>
            </div>
        </nav>
    )
}

const Links = ({text}) => {
    return (
        <>
        <li className="hover:cursor-pointer transition-all duration-400 hover:text-2xl hover:text-gray-400">{text}</li>
        </>
    )
}

export default NavBar;