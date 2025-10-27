import { useState, useEffect } from "react";
import NavBar from "../../props/navbar";

// Making a todo app for my second project, need to have an empty array 
const ToDo = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        text.trim() !== "" ? setTasks([...tasks, text]) : alert("Type in a todo");
        setText("");
    }

    const deleteTask = (index) => {
       let newTasks = tasks.filter((_, i) => i !== index);
       setTasks(newTasks);
    }
    return (
        <div className="transitions-colors duration-900 flex-col justify-center items-center bg-white pt-20 mb-0 dark:bg-black h-full">
            <div className="transitions-colors duration-900  bg-slate-50 mx-20  dark:bg-gray-950 h-lvh">
                <NavBar/>
                
                <div className="mt-25 pt-5 flex-col justify-center items-center m-auto bg-white w-2xl pb-10">
                     <h1 className="text-5xl text-center">Todo List App</h1>
                     <form 
                     onSubmit={addTask}
                     className="flex justify-center items-center mt-10 ">

                        <input type="text" 
                        value={text} 
                        onChange={handleInputChange}
                        placeholder="Enter something to do"
                        className="outline-2 w-7/10 ml-10 p-1"
                        />
                        
                        <button 
                        type="submit"
                        className="mr-10 ml-5 hover:cursor-pointer outline-2 p-1">Add Task
                        </button>
                     
                    </form>
                    
                        <div className="flex justify-left items-center mt-10 ml-13 mr-13">
                        <ol className=" w-full ml-4 mt-2 mb-5 mr-4">
                             {
                                tasks.map((task, index) => {
                                return (

                                <li className="flex justify-between align-center" key={index}>
                                    
                                    <span> {task}</span>
                                    
                                    <button 
                                        onClick={() => deleteTask(index)}>Delete
                                    </button>

                                </li>
                                
                                )
                            })}

                
                        </ol>
                     </div>
                     
                     
                </div>
            </div>
        </div>
    )
}

export default ToDo; 
