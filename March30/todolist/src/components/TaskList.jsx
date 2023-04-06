import React from "react";

const TaskList = ({id, content, done,  deleteTask, editTask,markDone}) => {
    let delKey ="del" + id;
    let editKey = "edit" + id;
    let pKey = "p" + id;
    let cKey = "c" + id;

    return ( 
            <div className="taskItem" key={id}>
                <p key={pKey}>{content}</p>
                <label className="checkBox">Done </label><input type="checkbox" key={cKey} onChange={markDone} checked={done} value={id} />
                <button onClick={()=>deleteTask(id)} key={delKey}>
                    Delete
                </button>
                <button onClick={()=>editTask(id, content)} key={editKey}>
                    Edit
                </button>
            </div>
     );
}
 
export default TaskList;