import Task from "./Task"


const Tasks = ({tasks, onDelete,onToggle}) => {

    
    // Assigning the tasks inside tasks component is not a good practice. We want to add them in the root 'app.js' so that we can select each task from root and manipulate them
//   const [tasks, setTasks ] =  useState([
//     {
//         id:1,
//         text: 'Doctors appointment',
//         day: 'Feb 2nd at 2:00pm',
//         reminder: true
//     },
     
//     {
//         id:2,
//         text: 'Go to walmart',
//         day: 'Feb 3rd at 2:00pm',
//         reminder: false
//     },

//     {
//         id:3,
//         text: 'Play badminton',
//         day: 'Feb 5th at 5:00pm',
//         reminder: true
//     }

// ])

  return (
    <>
    {tasks.map((task)=>(
        <Task key = {task.id} task = {task} 
        onDelete = {onDelete}
        onToggle ={onToggle} 
        />
    ))}
    </>
  )
}

export default Tasks