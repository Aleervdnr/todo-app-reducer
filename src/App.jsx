import './App.css'
import FormInput from './components/FormInput'
import { UseForm } from './hooks/useForm'
import { useReducer } from 'react'
import TaskList from './components/TaskList'

const initialState = [{
  id: 1,
  tarea: "Estudiar React Hooks",
  finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] agregar tarea":
      return[...state, action.payload]
    case "[TAREAS] finalizar tarea":
      return state.map(tarea => {
        if(tarea.id === action.payload){
          return {
            ... tarea,
            finalizada: !tarea.finalizada
          }
        } return tarea
      })
    case "[TAREAS] eliminar tarea":
      return state.filter(item => item.id != action.payload)
      
    case "[TAREAS] borrar tareas":
      return []
    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(tareaReducer, initialState)

  const {tarea, dataForm, setDataForm, onInputChange} = UseForm({tarea:""})

  const addTask = () => {
    const newTarea = {
      id: new Date().getTime(),
      tarea,
      finalizada: false
    }
    
    const action = {
      type: "[TAREAS] agregar tarea",
      payload: newTarea
    }
    dispatch(action)
  }

  const deleteTask = (id) => {
    const action = {
      type:"[TAREAS] eliminar tarea",
      payload: id
    }
    dispatch(action)
  }

  const deleteAll = (e) => {
    e.preventDefault()
    const action = {
      type:"[TAREAS] borrar tareas"
    }
    dispatch(action)
  }

  const finishTask = ({id}) => {
    const action = {
      type: "[TAREAS] finalizar tarea",
      payload: id
    }

    dispatch(action)
  }


  return (
    <>
    <header>
      <h1 className='bg-blue-600 text-white grid place-items-center h-[60px]'>Todo App</h1>
    </header>

    <FormInput 
      addTask={addTask}
      deleteAll={deleteAll}
      value={tarea}
      onChange={onInputChange}
      setDataForm={setDataForm}
    />

    <TaskList 
      data={state}
      deleteTask={deleteTask}
      onChange={finishTask}
    />
      
    </>
  )
}

export default App

