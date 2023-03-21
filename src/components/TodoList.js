import React,{useState} from "react";

export default function TodoList ({task,id,done,handleDelete}){

    const [taskdone,setTaskdone] = useState(done)

    const handlecheck = (e) => {
        setTaskdone(prev => e.target.checked)
      }

    const handleDelete_Task = () => {
        handleDelete(id)
    }

    return(
        <div>
            <h3>{task}</h3>
            <div className="checkbox_container">
                <input type="checkbox" name='task' checked={taskdone} onChange={handlecheck} />
            </div>
            {taskdone===true && <button onClick={handleDelete_Task}>Delete task done</button>}
        </div>
    )
}