import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js'
import FooterDiv from './components/Footer.js'
import MenuDiv from './components/Menu.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users':[]
        }
    }

    componentDidMount() {
//        const users = [
//            {
//            'first_name': "Fedor",
//            'last_name' : "Dostoevskiy",
//            "birthday_year" : 1821,
//            "email_address": "Fedor@mail.ru",
//            },
//            {
//            'first_name': "Aleksander",
//            'last_name' : "Grin",
//            "birthday_year" : 1880,
//            "email_address": "Alex@yandex.ru",
//            },
//        ]
//
//        this.setState({
//            'users':users
//            })


        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.setState(
            {
                'users':response.data
            }
            )}
        ).catch(error => console.log(error) )
    }

    render () {
        return (
            <div>
                < MenuDiv />
                < UserList users = {this.state.users} />
                < FooterDiv />

            </div>
        );
    }
}


export default App;
