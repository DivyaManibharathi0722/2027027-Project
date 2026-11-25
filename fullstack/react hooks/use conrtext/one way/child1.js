import React from "react";
import {UserContext ,IdContext}from './App'

function Child1()
{
    return(
        <div>
            <UserContext.Consumer>
                {
                     user1 =>
                        {
                            return (
                                <IdContext.Consumer>
                                    {
                                    id =>
                                    {
                                        return(
                                            <div>
                                            <h1>user name is {user1}</h1>
                                            <h2>user id is {id}</h2>
                                            
                                            </div>
                                        )

                                    }
                                }

                                </IdContext.Consumer>
                           
                                                   
                            )
                                                       
        
                        }

                }
               
            </UserContext.Consumer>
        </div>
    )
}
export default Child1;
