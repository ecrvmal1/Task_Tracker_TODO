import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";


let index = 0
let projId = 0

const ProjectItem = ({project, users, index, deleteProject}) => {
        let usernames = []
//       console.log('proj_Id = ', index)
     if (project.project_users) {

        //     console.log('users  ', users);
             const usr_indexes = project.project_users
        //     console.log('usr_indexes   ', usr_indexes)
             const proj_users = users.filter((elem, index) =>{
               return   usr_indexes.includes(index)
                } );
              usernames =  proj_users.map((usr) => {
                  return usr.first_name}).join(', ')

        }
     else { usernames = ' -- '
        }

    return (
    <tr>
        <td>
              <a href={`/project/${index}`}>{project.project_name}</a>
        </td>
        <td>
            {usernames}
        </td>
        <td>
            {project.project_date_created}
        </td>
        <td>
            {project.project_url}
        </td>
        <td>
            <button onClick={()=> deleteProject(project.id)}type='button'>Delete</button>
        </td>

    </tr>

    )
}

const ProjectList = ({projects, users, deleteProject}) => {
    return (
        <table>
        <tbody>
              <tr>
            <th>
                Project name
            </th>
            <th>
                Project Users
            </th>
            <th>
                Date Created
            </th>
            <th>
                Project URL
            </th>
    </tr>
            {projects.map((project, index) => <ProjectItem project = {project}
                                                    users = {users}
                                                    index = {index}
                                                    deleteProject={deleteProject}
                                                          />
                        )}

              </tbody>
              </table>
       )
    }


export default ProjectList