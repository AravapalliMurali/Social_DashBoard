import React from 'react'
import {Link,Route} from 'react-router-dom'
import DashBoard from './DashBoard'
import LoginIn from './LoginIn'


export default function App(props){

  return(
    <div>
      <h1>Social DashBoard</h1>
      <Link to ="/">LoginIn</Link>

      <Route path ='/' component = {LoginIn} exact ={true}/>
      <Route path = '/dashboard' component ={DashBoard} />
    </div>
  )
}