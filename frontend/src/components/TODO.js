import React from "react";
import '../App.css';
import {HashRouter,Route,BrowserRouter,Link,Switch,Redirect} from "react-router-dom";

const TodoItem = ({itemnote,users,projects}) => {

    let activity =''
    let author_name = ''
    let project_name = ''

     if (itemnote.note_active) {activity = 'active';}
        else {activity= 'Non-active';}

     if (itemnote.note_author) {
        const author = users[itemnote.note_author]
//        console.log(author);
        try {
        author_name = author.first_name
        } catch(err) {
         author_name ="Not Defined"}}

     if (itemnote.note_project) {
//     console.log('itemnote.note_project   ', itemnote.note_project);
//     console.log('projects  ', projects);
        const project = projects.find((project) => project.id === itemnote.note_project )
//        console.log('project   ',project);
        try {
        project_name = project.project_name
        } catch(err) {
         project_name ="Not Defined"}}


    return (
    <tr>
        <td>
            {itemnote.note_text}
        </td>
        <td>
            {author_name}
        </td>
        <td>
            {itemnote.note_daytime_created}
        </td>
        <td>
            {activity}
        </td>
        <td>
            {project_name}
        </td>
    </tr>

    )
 }


const TODOList = ({todolist,projects,users}) => {
    return (
        <table>
           <tbody>
            <tr>
            <th>
                Text
            </th>
            <th>
                Author
            </th>
            <th>
                Created at
            </th>
            <th>
                Active
            </th>
            <th>
                Used in Project
            </th>
            </tr>
            {todolist.map((note) => <TodoItem
                itemnote = {note}
                users = {users}
                projects = {projects}
                />)}
            </tbody>
            </table>
       )
    }


export default TODOList