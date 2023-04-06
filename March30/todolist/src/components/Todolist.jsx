import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

const TodoList = () => {
    const [taskItems, setTaskItems] = useState([
        {
            id:uuidv4(),
            content:"Cook breakfast",
            done:true
        },
        {
            id:uuidv4(),
            content:"Call Boss",
            done:false
        },
        {
            id:uuidv4(),
            content:"Walk doglet",
            done:false
        }
    ]);
    const [editBoxStyle, setEditBoxStyle] = useState("editBoxHidden");//had to split these two up because of issues of not updateing
    const [editBoxContent, setEditBoxContent] = useState({taskID:"", content:"", });
    const deleteTask = (id) =>{
        let arrTemp = taskItems.filter(item=> item.id !== id);
        setTaskItems(arrTemp);
    };
    const showEdit=()=>{
        setEditBoxStyle("editBoxShown");
    };
    const hideEdit=()=>{
        setEditBoxStyle("editBoxHidden");
    };
    const handleEdit=(e)=>{
        setEditBoxContent({...editBoxContent, content:e.target.value});
    }
    const addTask=()=>{
        let arrTemp = taskItems;        
        let taskID=editBoxContent.taskID;
        if ( taskID === undefined || taskID ===""){       
            arrTemp.push ({
                id:uuidv4(),
                content:editBoxContent.content,
                done:false
            })
        }else{
            for(let i=0; i<arrTemp.length;i++){
                if (arrTemp[i].id === taskID) {
                    arrTemp[i].content = editBoxContent.content;
                };
            }
        };
        hideEdit();
        setEditBoxContent({taskID:"",content:""});
        setTaskItems(arrTemp);
    };

    const startEditTask=(id, text)=>{   
        setEditBoxContent({taskID:id, content:text });
        showEdit();
    };
    const markTaskDone=(e)=>{
        let arrTemp = taskItems;
        for(let i=0; i<arrTemp.length;i++){
            if (arrTemp[i].id == e.target.value) {
                arrTemp[i].done = e.target.checked;
            };
        }
        setTaskItems([...arrTemp]);//it's "reactive" lmfao
    }
    return (
        <div className="tasksContainer" key="tasklistcontainer">
            <div className="taskList" key="taskList">
                {taskItems.map((task) => (
                    <TaskList 
                        id={task.id}
                        content={task.content}
                        deleteTask={deleteTask} 
                        editTask = {startEditTask}
                        done = {task.done}
                        markDone={markTaskDone}
                    />
                ))}
            </div>
            <br key="br"></br>
            <div className={ editBoxStyle } key="editboxarea">
                <textarea id="textContent" taskid={editBoxContent.taskID} key="textarea" onChange={handleEdit} value={editBoxContent.content}>
                </textarea>
                <button onClick={addTask} key="submitButton">Submit</button>
            </div>

            <button className="buttonShow"onClick={showEdit} key="addButton">Add a task</button>
        </div>
    )
}
export default TodoList;
