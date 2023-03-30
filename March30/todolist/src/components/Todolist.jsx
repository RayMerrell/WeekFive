import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./TaskList";

const TodoList = () => {

    const [editBoxClassName, setEditable] = useState("editBoxHidden");
    const [taskItems, setTaskItems] = useState([
        {
            id:uuidv4(),
            content:"Cook breakfast"
        },
        {
            id:uuidv4(),
            content:"Call Boss"
        },
        {
            id:uuidv4(),
            content:"Walk doglet"
        }
    ]);
    
    const deleteTask = (id) =>{
        console.log("Delete task", id); 
        let arrTemp = taskItems.filter(item=> item.id !== id);
        console.log("arrTemp", arrTemp);
        setTaskItems(arrTemp);
    };
    const showEdit=()=>{
        setEditable("editBoxShown");
    };
    const hideEdit=()=>{
        setEditable("editBoxHidden");
    };
    const addTask=()=>{
        let arrTemp = taskItems;        
        let taskID = document.getElementById("textContent").taskid;
        console.log("addtask", document.getElementById("textContent").value, taskID);
        if ( taskID === undefined || taskID ===""){    
            console.log("Additem")        
            arrTemp.push ({
                id:uuidv4(),
                content:document.getElementById("textContent").value,
            })
        }else{
            for(let i=0; i<arrTemp.length;i++){
                if (arrTemp[i].id === taskID) {
                    arrTemp[i].content = document.getElementById("textContent").value;
                };
            }
        };
        hideEdit();
        setTaskItems(arrTemp);
        document.getElementById("textContent").value="";
        document.getElementById("textContent").taskid="";
    };

    const startEditTask=(id, text)=>{
        let arrTemp = taskItems;
        showEdit();
        document.getElementById("textContent").value = text;
        document.getElementById("textContent").taskid = id;
    };

    return (
        <div className="tasksContainer" key="tasklistcontainer">
            <div className="taskList" key="taskList">
                {taskItems.map((task) => (
                    <TaskList 
                        id={task.id}
                        content={task.content}
                        deleteTask={deleteTask} 
                        editTask = {startEditTask}
                    />
                ))}
            </div>
            <br key="br"></br>
            <div className={ editBoxClassName } key="editboxarea">
                <textarea id="textContent" taskid="" key="textarea"></textarea>
                <button onClick={addTask} key="submitButton">Submit</button>
            </div>

            <button className="buttonShow"onClick={showEdit} key="addButton">Add a task</button>
        </div>
    )
}
export default TodoList;
