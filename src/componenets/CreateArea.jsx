import React,{useState} from "react";

function CreateArea(props) {

    const[task,setTask] = useState({
        title : "",
        content : "",
    });

    function handleChange(event){
        let value = event.target.value;
        let name = event.target.name;
        setTask((oldvalue)=>{
            return {
                ...oldvalue,
                [name] : value
            }
        })
    }

  return (
    <div>
      <form onSubmit={(event)=>{
            props.addItem(task);
            setTask({
                title : "",
                content : ""
            });
            event.preventDefault();
        }}>
        <input onChange={handleChange} name="title" placeholder="Title" value={task.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={task.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;