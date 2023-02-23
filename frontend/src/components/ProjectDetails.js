import React from "react";
import '../App.css';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {HashRouter,Route,BrowserRouter,Link,Switch,Redirect} from "react-router-dom";



const ProjectData = ({project, users})  => {
    console.log( "projectData works");
    console.log('project ', project);
    const usr_indexes = project[0].project_users;
    console.log('usr_indexes   ', usr_indexes);

return (<div></div>)
}

const ProjectDetails = ({projects, users}) => {
     let {id} =  useParams()
//      console.log('project details works, id =  ', parseInt(id))
//      console.log('projects =  ', projects)
      let project = projects.filter((project, index) => index === parseInt(id))
//      let project = projects.filter [parseInt(id)]
       console.log('project ', project)


    return(
        <table>
            <th>
                ID
            </th>
               <th>
                Name
            </th>
               <th>
                Author
            </th>
          { project => <ProjectData project={project} users={users}/>}
        </table>
    )

    }

export default ProjectDetails