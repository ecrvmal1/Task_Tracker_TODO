import React from "react";



class TODOForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'text': '',
            'author': props.users[0]?.id,
            'project': props.projects[0]?.id,}
        }

    handleChange(event) {
        this.setState(
        {[event.target.name]: event.target.value})
        }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.user,this.state.url)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className = {"form-group LoginForm" }>
                    <label form={"text"}>TODO Text</label>
                    <input type="text" className="form-control"
                        name="text" value={this.state.text}
                        onChange={(event)=>this.handleChange(event) }/>
                </div>

                <div className = {"form-group LoginForm"}>
                    <label form={"author"}>TODO Author</label>

                    <select name="user" className="form-control" onChange={(event)=>this.handleChange(event)}>
                        {this.props.users.map((item) => <option value={item.id} > {item.first_name}</option>)}
                    </select>
                </div>

                <div className = {"form-group LoginForm"}>
                    <label form={"project"}>TODO Project</label>

                    <select name="project" className="form-control" onChange={(event)=>this.handleChange(event)}>
                        {this.props.projects.map((item) => <option value={item.id} > {item.first_name}</option>)}
                    </select>
                </div>

                <input type="submit" className="btn btn-primary"
                        name="todo" value="Save" />
            </form>
        )}
    }

export default TODOForm