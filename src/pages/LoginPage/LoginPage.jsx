import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';


class LoginPage extends React.Component {
    state = {
        email: '',
        pw: ''
    };
    handleChange = (e) => {
        
    }
    handleSubmit = async (e) => {

    }
    render() {
        return(
            <div className="LoginPage">
            <header className="header-footer">Log In</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to='/' className="btn btn-danger">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        )
    }
}

export default LoginPage;