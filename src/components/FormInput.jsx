export default function FormInput({addTask,deleteAll, value, onChange, setDataForm}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value){
            addTask()
            setDataForm({tarea:""})
        }
        else{
            alert("No hay tarea para agregar")
        }
    }

  return (
    <form className="grid place-items-center px-8 my-2 max-w-[700px] m-auto" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">📓</span>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Add New Task..."
                name="tarea"
                value={value}
                onChange={onChange}
            />
        </div>
        <div className="flex gap-4">
            <button className="btn btn-success">Add Task</button>
            <button 
                className="btn btn-danger"
                onClick={deleteAll}
            >
                Delete All
            </button>
        </div>
    </form>
  )
}
