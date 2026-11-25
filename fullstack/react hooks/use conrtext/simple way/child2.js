import React,{useContext} from 'react'
//import Child1 from './child1'
import { UserContext,IdContext } from './App' 

function Child2()
{
    const user=useContext(UserContext)
    const id=useContext(IdContext)
    return (
        <div>
            {user}
            {id}
        </div>
    )
}
export default Child2;