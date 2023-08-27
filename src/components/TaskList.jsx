import { RiDeleteBin5Line,RiEdit2Line } from 'react-icons/ri';

export default function TaskList({data,deleteTask,onChange}) {
  return (
    <ul className="list-group max-w-[700px] m-auto">
        <h2 className='text-center'>Pending Tasks {data.filter((task) => task.finalizada === false).length}</h2>
        {data.filter((task)=> task.finalizada == false).map((task)=>{
            return(
                <li key={task.id} className="border-b-[.5px] border-gray-300 p-3 first:border-t-[.5px] grid grid-cols-[20px,1fr,40px,40px] gap-2 items-center">
                    
                        <input 
                            className="form-check-input me-1" 
                            type="checkbox" 
                            value={task.finalizada}
                            onChange={() => onChange(task)}
                            id={task.tarea}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor={task.tarea}
                        >
                            {`${task.tarea} ${task.finalizada}`}
                        </label>
                    <button
                        className="btn btn-primary h-[40px]"    
                    >
                        <RiEdit2Line/>
                    </button>
                    <button 
                        className="btn btn-danger h-[40px]"
                        onClick={()=>deleteTask(task.id)}
                    >
                        <RiDeleteBin5Line/>
                    </button>
                </li>
            )
        })}
        <h2 className='text-center'>Completed Tasks {data.filter((task) => task.finalizada === true).length}</h2>
        {
            data.filter((task) => task.finalizada === true).map((task) => {
                return(
                    <li key={task.id} className="border-b-[.5px] border-gray-300 p-3 first:border-t-[.5px] grid grid-cols-[20px,1fr,40px,40px] gap-2 items-center bg-gray-100">
                    
                        <input 
                            className="form-check-input me-1" 
                            type="checkbox" 
                            value={task.finalizada}
                            checked
                            onChange={() => onChange(task)}
                            id={task.tarea}
                        />
                        <label 
                            className="form-check-label line-through" 
                            htmlFor={task.tarea}
                        >
                            {`${task.tarea} ${task.finalizada}`}
                        </label>
                        <button
                            className="btn btn-primary h-[40px]"    
                        >
                            <RiEdit2Line/>
                        </button>
                        <button 
                            className="btn btn-danger h-[40px]"
                            onClick={()=>deleteTask(task.id)}
                        >
                            <RiDeleteBin5Line/>
                        </button>
                    </li>
                )
            })
        }
    </ul>
  )
}
