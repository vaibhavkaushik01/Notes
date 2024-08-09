import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [tasksarr,setTasksArr] = useState([]);

    function addTaskObj(taskObj){
        setTasksArr((oldarr)=>{
            return [...oldarr,taskObj]
        });
    }

    function removeTaskObj(id){
        setTasksArr((oldarr)=>{
            return (
                oldarr.filter((taskobj,index)=>{
                    return index !== id;
                })
            )
        })
    }

  return (
    <div>
      <Header />
      <CreateArea addItem={addTaskObj} />
      {tasksarr.map((taskobj,index)=>{
        return <Note key={index} id={index} title={taskobj.title} content={taskobj.content} deleteItem={removeTaskObj}/>
      })}
      <Footer />
    </div>
  );
}

export default App;