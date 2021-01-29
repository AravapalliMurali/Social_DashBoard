import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function LoginIn(props){
    const [email , setEmail] = useState([])
    const [users , setUsers] = useState([])
    const [verfied , setVerfied ] = useState([])
    const [data ,setData] = useState([])

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    } 

    const handleSubmit =(e)=>{
        e.preventDefault()   
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                //console.log(response.data)
                setUsers(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })  
        
        const filterData = () =>{
            const result  = users.filter(ele=>{
                return ele.email === email
            })
            setData(result)
        }
        console.log('usersdata:', data)
    }

    console.log('usersdata:', data)

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Email</label>
                <input type ="text" value ={email} onChange ={handleEmail}/> <br/> <br/>
                <Link to ='/dashboard'><input type ="submit" value ='login'/></Link>

            </form>
        </div>
    )
}