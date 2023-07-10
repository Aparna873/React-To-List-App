export const  Task=(props)=>{
    return(
        <div className="task"
            style={{backgroundColor:props.completed ? "green" : "red"}}>
            <h1>{props.taskName}</h1>
            <button className="btn" onClick={()=>props.completeTask(props.id)}><b>Completed</b></button>
           <button className="btn" onClick={()=>props.deleteTask(props.id)}><b> Remove </b></button>
            </div>
    );
}