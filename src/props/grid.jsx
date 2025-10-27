import { Link } from "react-router-dom";


function Project ({image, name}) {
    return (
        <>
         <div className='' ><img src={image} alt={name} className='ease-in-out duration-900 border-solid w-3/5  rounded-sm shadow-xl/75 m-20 hover:cursor-pointer dark:shadow-gray-700 dark:shadow-md/30'/></div>
        </>
    )
}
function Grid () {
    return (
    <div className='grid grid-cols-4 gap-4 w-6xl m-auto text-center shadow-md mt-20'>
       <Link to="/projects/counter"><Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/></Link>
        <Link to="/projects/todo"><Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/></Link>
         <Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/>
          <Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/>
           <Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/>
            <Project image={"https://images.unsplash.com/photo-1741384656419-5acf0800e5eb?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"counterapp"}/>
    </div>
    )
}

export default Grid; 