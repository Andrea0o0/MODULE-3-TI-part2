import React,{useState} from "react";

export default function AddTask({handleAddTask}) {
    const initialState = {
        task:'',
        done:false
    }

    const [newtask,setnewTask] = useState(initialState)

    const handleChange = (e) => {
        setnewTask(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask(newtask);
        setnewTask(initialState);
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Task title</label>
                <input type="text" name="task" value={newtask.task} onChange={handleChange} required />
                <button type="submit" className="btn">Create</button>
            </form>
        </div>
        
    )
}