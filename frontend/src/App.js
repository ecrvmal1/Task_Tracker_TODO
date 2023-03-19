import React from 'react';
import ReactDom from "react-dom";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js';
import ProjectList from './components/Projects.js';
import TODOList from './components/TODO.js';
import ProjectDetails from './components/ProjectDetails.js';
import FooterDiv from './components/Footer.js';
import MenuDiv from './components/Menu.js';
import LoginForm from './components/Auth.js';
import ProjectForm from './components/ProjectForm.js';
import TODOForm from './components/TODOForm.js';
import NotFound404 from "./components/NotFound404.js";
import {HashRouter,Route,Routes,BrowserRouter,Link} from "react-router-dom";
//import { browserHistory } from 'react-router'
import Cookies from "universal-cookie";
import BlancPage from  './components/Blanc.js'
import { useNavigate , withRouter } from "react-router-dom";




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


    createProject(name,user,url) {
         console.log("create project", name, user, url)
         const headers = this.get_headers()
         const data = {project_name: name, project_users:[Number(user)],project_url: url}
//         const my_user = this.state.users.filter((item) =>{ return  [Number(+user)].includes(item.id) } );
//         console.log ('users', this.state.users)
//        console.log('user ', user, my_user)
         axios.post('http://127.0.0.1:8000/api/projects/',data,{headers}).
            then(response => {
                let new_project= response.data
                this.setState({projects:[...this.state.projects, new_project]})
                        })
            .catch(error => {console.log(error)})
    }

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers: headers})
            .then(response =>{
                this.setState({projects:this.state.projects.filter((item) =>item.id !== id)})
        }).catch(error => console.log(error))
    }



    createTODO(text,author,project) {
         console.log("create TODO", text,author,project)
         const headers = this.get_headers()
         const data = {note_text: text, note_author: Number(author),note_project: project}
//         const my_user = this.state.users.filter((item) =>{ return  [Number(+user)].includes(item.id) } );
//         console.log ('users', this.state.users)
//        console.log('user ', user, my_user)
         axios.post('http://127.0.0.1:8000/api/projects/',data,{headers}).
            then(response => {
                let new_todo= response.data
                this.setState({TODOList:[...this.state.TODOList, new_todo]})
                        })
            .catch(error => {console.log(error)})
    }


    deleteTODO(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/TODO/${id}`, {headers: headers})
            .then(response =>{
                this.setState({TODO:this.state.projects.filter((item) =>item.id !== id)})
        }).catch(error => console.log(error))
    }



    load_data() {
        const headers = this.get_headers()
        console.log('load_data')
        axios.get('http://127.0.0.1:8000/api/users/',{headers}).then(response => {
            this.setState(
                {
                    'users': response.data
                },()=>console.log("users",this.state.users)
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/',{headers}).then(response => {
            this.setState(
                {
                    'projects': response.data
                },()=>console.log("projects",this.state.projects)
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/TODO/',{headers}).then(response => {
            this.setState(
                {
                    'TODOList': response.data
                },()=>console.log("TODOlist",this.state.TODOList)
            )
        }).catch(error => console.log(error))

    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/',
            {'username': username, 'password': password})
            .then(response => {
//              console.log(response.data['token'])
                this.set_token(response.data['token'])
                this.setState({'username': username}, ()=>{
                    console.log("username",this.state.username)})
//                changes url without reloading
                window.history.replaceState(null, null, '/users')

            }).catch(error => alert('Не верный логин или пароль'))


            }

    set_token(token) {
        console.log('set_token')
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => {
        console.log("token",this.state.token)
        this.load_data()})
    }

    is_auth(){
            console.log('is_auth', this.state.token)
        if (this.state.token === "") {
        return false }
        else {
        return true
        }
    }

    get_headers(){
        console.log('get_headers')
        let headers = {
        'Content-Type':'application/json'
        }
        if(this.is_auth()){
            headers['Authorization'] = `Token ${this.state.token}`
        }
        return headers
    }

    logout() {
        console.log('logout')
//        this.setState({token : ""})
        this.setState({username:'_'},()=>console.log("username",this.state.username))
        this.setState({token:''},()=>console.log("token",this.state.token))
//        this.state.token = ""
//        this.state.username = "_"
        const cookies = new Cookies()
        cookies.set("token", "")
        cookies.set("username", "")
        window.location.replace('http://127.0.0.1:3000/login');
    }

    get_token_from_cookies(){
        const cookies = new Cookies()
        const token = cookies.get('token')

//        if (token) { this.setState({'token':token})}
//        const username = cookies.get('username')
//        if (!(username || username ==='_')) { this.setState({'username':username})}
//        const users = cookies.get('users')
//        if(users) { this.setState({'users':users})}
//        const projects = cookies.get('projects')
//        if ( projects) {this.setState({'projects':projects})}
//        const TODOList = cookies.get('Todolist')
//        if (TODOList) {this.setState({'TODOList':TODOList})}
        console.log('get_token_from_cookies token : ',token)
    }

    componentDidMount() {
        this.get_token_from_cookies()
    }

    render () {
        return (
        <div>
            <BrowserRouter>
                <nav>
                    <MenuDiv username={this.state.username} status={this.is_auth()} logout={() => this.logout()}/>
                    <Routes>
                        <Route exact path="/" element={<UserList users={this.state.users}/>}/>

                        <Route path="/users" element={<UserList users={this.state.users}/>}/>

                        <Route path="/projects" element={<ProjectList
                            projects={this.state.projects}
                            users={this.state.users}
                            deleteProject={(id)=> this.deleteProject(id)}
                            />}/>

                        <Route path="/project/:id" element={
                            <ProjectDetails
                                projects={this.state.projects}
                                users={this.state.users}
                            />}/>

                        <Route path="/project/create" element={
                            <ProjectForm
                                users={this.state.users}
                                createProject={(name,user,url)=> this.createProject(name,user,url)}/>}/>

                        <Route path="/TODO" element={
                            <TODOList
                                todolist={this.state.TODOList}
                                projects={this.state.projects}
                                users={this.state.users}
                                deleteTODO={(id)=> this.deleteTODO(id)}
                            />}/>

                        <Route path="/TODO/create" element={
                            <TODOForm
                                users={this.state.users}
                                projects={this.state.projects}
                                createProject={(text,author,project)=> this.createProject(text,author,project)}/>}/>





                        <Route path='/login' element={<LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        {/* <Route exact path='/logout' component={() => { this.logout();
                        <LoginForm get_token={(username, password) => this.get_token(username, password)}/>
                            }}/>   */}

                        <Route path="*" element={NotFound404}/>
                    </Routes>
                    <FooterDiv />
                </nav>
            </BrowserRouter>
        </div>

        );
    }

}

export default App;
