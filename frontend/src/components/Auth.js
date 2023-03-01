import React from "react"
import '../App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"login":'',"password":''}
    }


    handleChange(event) {
    this.setState(
            {
        [event.target.name] : event.target.value
            }
        )
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login,this.state.password)
        event.preventDefault()
        }

    render() {
        return(
               <form className="LoginForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <h4 className="LoginLine"> Login      </h4>
                    <input  className="LoginLine" type="text" name="login" placeholder="login" value={this.state.login}
                           onChange={(event) => this.handleChange(event)}/> <br />
                    <h4  className="LoginLine" > Password  </h4>
                    <input  className="LoginLine" type="password" name="password" placeholder="password" value={this.state.password}
                           onChange={(event) => this.handleChange(event)}/> <br />
                    <input  className="LoginLine" type="submit" value="Login"/>
                </form>
        );
    }

}

export default LoginForm