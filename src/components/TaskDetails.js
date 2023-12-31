import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Button from './Button'

function TaskDetails(){
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    // const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchTask = async() =>{
                const res = await fetch(`http://localhost:5000/tasks/${params.id}`)

                const data = await res.json()

                //ideal way to handle error is using 'useNavigate' method
                if(res.status === 404){
                    navigate('/')
                }

                setTask(data)
                setLoading(false)
        }

        fetchTask()
    })

    
    
    
    
    // if(error){
    //     return <Navigate to='/' />
    // }


    return loading?(
        <h3>Loading...</h3>) : (
            <div>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
                <Button 
                 text = 'Go back'
                 onClick = {() => {
                    //takes to the immediate last page
                    navigate(-1)
                }} />
            </div>
        )






}

export default TaskDetails