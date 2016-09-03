import React from 'react'
import {Link} from 'react-router'
import Helmet from 'react-helmet'
import Error from '../../core/components/error.jsx'

/**
 * @class component UserLogin
 * @classdesc Shows user login form
 */
class UserLogin extends React.Component{
  /**
   * Renders the login form
   * @access private
   */
  render(){
    return (<div className="row">
        <Helmet
          title="Login"
        />
        <div className="col s12 m8 offset-m2 l4 offset-l4 center-align">
          <h1>Login</h1>
          <Error error={this.props.error} />
          <form onSubmit={this.login.bind(this)}>
            <div className="input-field col s12 left-align">
              <input className="validate" type="email" id="email" name="email" required />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="input-field col s12 left-align">
              <input className="validate" type="password" name="password" required />
              <label htmlFor="email">Your password</label>
            </div>
            <div className="left-align"><Link to={"forgot-password"}>Forgot password?</Link></div>
            <div className="expanded button-group">
              <Link to={"register"} className="waves-effect waves-teal btn-flat">Register</Link>
              <input type="submit" value="Login" className="btn waves-effect waves-light"></input>
            </div>
          </form>
        </div>
      </div>)
  }

  /**
   * Login the user
   * @access private
   * @param {event} e Submit event from the form
   */
  login(e){
    e.preventDefault()

    let email = e.target.email.value
    let password = e.target.password.value

    const {loginUser} = this.props
    loginUser(email, password)
  }
}

export default UserLogin
