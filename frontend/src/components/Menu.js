import React from "react";
import '../App.css';



const MenuDiv = () => {
    return (
    <div className="Menu-nav">
        <nav>
            <ul>
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
    </div>

       )
    }


export default MenuDiv