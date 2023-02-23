import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";



let projId = 0

//const ProjectData = ({project, users }) => {
//
//        let usernames = []
//       console.log('proj_Id = ', index)
//     if (project.project_users) {
//
//        //     console.log('users  ', users);
//             const usr_indexes = project.project_users
//        //     console.log('usr_indexes   ', usr_indexes)
//             const proj_users = users.filter((elem, index) =>{
//               return   usr_indexes.includes(index)
//                } );
//              usernames =  proj_users.map((usr) => {
//                  return usr.first_name}).join(', ')
//
//        }
//     else { usernames = ' -- '
//        }
//
//    return (
//    <tr>
//        <td>
//              <Link to={`/project/${index}`}>{project.project_name}</Link>
//        </td>
//        <td>
//            {usernames}
//        </td>
//        <td>
//            {project.project_date_created}
//        </td>
//        <td>
//            {project.project_url}
//        </td>
//    </tr>
//
//    )
//}

const ProjectDetails = ({projects, users}) => {
      let {Id} = useParams()
      console.log('project details works, id =  ', Id)

//      let project = projects.filter((project => projects.project_id === Id ))
//      console.log('project ', project)

    return (
        <table>
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
           {/* {projects.map((project, index) => <ProjectData project = {project}
                                                    users = {users}
                                                          />
                        )}
                        */}
        </table>
       )
    }


export default ProjectDetails