import React from 'react';
import ReactDom from "react-dom"
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js'
import ProjectList from './components/Projects.js'
import TODOList from './components/TODO.js'
import ProjectDetails from './components/ProjectDetails.js'
import FooterDiv from './components/Footer.js'
import MenuDiv from './components/Menu.js'
import LoginForm from './components/Auth.js'
import NotFound404 from "./components/NotFound404.js";
import {HashRouter,Route,BrowserRouter,Link,Switch,Redirect} from "react-router-dom";
import Cookies from "universal-cookie";
import BlancPage from  './components/Blanc.js'




class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            'users':[],
            'projects':[],
            'TODOList':[],
            'token':'',
            'username':'_',
        }
    }

//    createProject(id) {
//        const headers = this.get_headers()
//        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers: headers})
//            .then(response =>{
//                this.setState({projects:this.state.books.filter((item) =>item.id !== id)})
//        }).catch(error => console.log(error))
//    }
//
//
//    deleteProject() {
//
//    }

    load_data() {
        const headers = this.get_headers()
        console.log('load_data')
        axios.get('http://127.0.0.1:8000/api/users/',{headers}).then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/',{headers}).then(response => {
            this.setState(
                {
                    'projects': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/TODO/',{headers}).then(response => {
            this.setState(
                {
                    'TODOList': response.data
                }
            )
        }).catch(error => console.log(error))

    }

    get_token(username, password) {
        this.state.username = username
        axios.post('http://127.0.0.1:8000/api-token-auth/',
            {'username': username, 'password': password})
            .then(response => {
//              console.log(response.data['token'])
                this.set_token(response.data['token']);
            }).catch(error => alert('Не верный логин или пароль'))
            }

    set_token(token) {
        // localStorage.setItem('token',token)
        // let item = localStorage.getItem('token')
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_auth(){
            console.log('is_auth')
        if (this.state.token === "") {
        return false }
        else {
        return true
        }
    }

    get_headers(){
        let headers = {
        'Content-Type':'applications/json'
        }
        if(this.is_auth()){
            headers['Authorization'] = `Token ${this.state.token}`
        }
        return headers
    }

    logout() {
        console.log('logout')
//        this.setState({token : ""})
        this.setState({username:'_'})
        this.set_token('')
//        this.state.token = ""
//        this.state.username = "_"
        const cookies = new Cookies()
        cookies.set("token", "")
        cookies.set("username", "")
        window.location.replace('http://127.0.0.1:3000/login');
    }

    get_token_from_cookies(){
        console.log('get_token_from_cookies')
        const cookies = new Cookies()
        const username = cookies.get('username')
        if (!(username == '_')) {this.setState({'username': username}) }
        console.log('get_token_from_cookies username ',this.state.username)
        const token = cookies.get('token')
        console.log('get_token_from_cookies token',token)
//        if (token) {this.setState({'token': token},()=>this.load_data())}
//        else {
//        window.location.replace('http://127.0.0.1:3000/login');}
//        }
    }




    componentDidMount() {
        console.log('componentDidMount')
        this.get_token_from_cookies()
    }

    render () {
        return (

                <BrowserRouter>
                                <alert return />
                     {/* <Route component={
                            () => <MenuDiv username={this.state.username} status={this.is_auth()}  />}/> */}
                     <MenuDiv username={this.state.username} status={this.is_auth()} logout={() => this.logout()} />
                    <Switch>

                      <Route exact path="/" component={
                            () => <UserList users={this.state.users}/>}/>

                      <Route exact path="/users" component={
                            () => <UserList users={this.state.users}/>}/>

                      <Route exact path="/projects" component={
                            () =>  <ProjectList
                            projects={this.state.projects}
                            users={this.state.users}
                            deleteProject={(id)=> this.deleteProject(id)}
                            />}/>

                      <Route exact path="/TODO" component={
                            () =>  <TODOList
                                todolist={this.state.TODOList}
                                projects={this.state.projects}
                                users={this.state.users}
                            />}/>

                       <Route path="/project/:id" component={
                            () =>  <ProjectDetails
                                projects={this.state.projects}
                                users={this.state.users}
                            />}/>

                       <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                {/* <Route exact path='/logout' component={() => { this.logout();
                        <LoginForm get_token={(username, password) => this.get_token(username, password)}/>
                            }}/>   */}

                          <Route component={NotFound404}/>
                    </Switch>
                    <FooterDiv />
                </BrowserRouter>


        );
    }
}


export default App;
