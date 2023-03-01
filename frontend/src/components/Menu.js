

import React from "react";
import '../App.css';
import logout from '../App.js'



const MenuDiv = ({username, token}) => {
    console.log('menu1',username,token)
    if ( username == '_' && token ) {
    username = 'unknown'}
    console.log('menu2',username,token)

   {/* handleOnClick(event) {
        this.props.(this.state.login,this.state.password)
        event.preventDefault()
        }    */}

    return (
    <div className="Menu-div">
        <nav >
            <ul className="Menu-nav">
                <li className="Menu-li">
                    <a href="/users">Users</a>
                </li>
                <li className="Menu-li">
                    <a href="/projects">Projects</a>
                </li>
                <li className="Menu-li">
                    <a href="/TODO">TODO</a>
                </li>
            </ul>

        </nav>
        <nav>
             <ul className="Menu-nav">
                <li className="Menu-li">
                      { token? username:<p />  }
                </li>
                <li className="Menu-li">
                  {token?  <a href='/logout'>LogOut</a>: <a href='/login'>LogIn</a>}

                                           {/*  <button onClick={()=> logout_call=true }>LogOut</button> */}

                </li>
             </ul>
        </nav>

    </div>

       )
    }


export default MenuDiv