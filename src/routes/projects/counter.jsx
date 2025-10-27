import { useState } from "react";
import NavBar from "../../props/navbar";

//I'm going to make a counter for my first project, just a normal useState hook and some designs.

function Counter () {

    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    return (
        
        <div className="transitions-colors duration-900 flex-col justify-center items-center bg-white pt-20 mb-0 dark:bg-black h-full">
            <div className="transitions-colors duration-900  bg-slate-50 mx-20  dark:bg-gray-950">
                <NavBar/>
                <div onClick={addCount} className="bg-linear-to-r from-fuchsia-700 to-sky-200 bg-white ease-in-out duration-200  rounded-4xl shadow-2xl/50 flex-col flex gap-20 justify-center items-center mb-20 w-3/12 p-10 mt-30 mx-auto hover:cursor-pointer">
                    <h1 className="text-9xl">{count}</h1>
                </div>
            </div>
        </div>
        
    )
}

export default Counter;