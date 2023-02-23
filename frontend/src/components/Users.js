import React from "react";
import '../App.css';

const UserItem = ({user}) => {

    return (
    <tr>
        <td>
            {user.first_name}
        </td>
        <td>
            {user.last_name}
        </td>
        <td>
            {user.birthday_year}
        </td>
        <td>
            {user.email}
        </td>
    </tr>

    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Year of Birth
            </th>
            <th>
                Email Address
            </th>
            {users.map((user) => <UserItem user = {user} />)}
        </table>
       )
    }


export default UserList