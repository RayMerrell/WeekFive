import React from "react";

const TaskList = ({id, content, deleteTask, editTask}) => {
    let delKey ="del" + id;
    let editKey = "edit" + id;
    let pKey = "p" + id;
    return ( 
            <div className="taskItem" key={id}>
                <p key={pKey}>{content}</p>
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