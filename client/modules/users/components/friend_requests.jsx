import React from 'react'
import {Materialize} from 'meteor/poetic:materialize-scss'
import {Link} from 'react-router'
import Helmet from 'react-helmet'

/**
 * @class component UserFriendsRequests
 * @classdesc Component to manage friend requests.
 */
export default class UserFriendsRequests extends React.Component{
  /**
   * Accepts a friend request from a given user.
   * @access private
   * @param {string} requestor userId
   */
  accept(requestor){
    requestor.acceptFriendshipRequest()
    Materialize.toast("You are now friends with " + requestor.username, 5000)
  }

  /**
   * Deny a request for friendship from the given user.
   * @access private
   * @param {string} requestor userId
   */
  deny(requestor){
    requestor.denyFriendshipRequest()
  }

  /**
   * Shows listing and options for friend requests.
   * @access private
   * @returns {jsx}
   */
  request(){
    let {requests} = this.props

    if(requests.length === 0){
      return <li className="collection-item">You have no requests for friendship.</li>
    } else {
      return requests.map((req)=>{
        let requester = req.requester()

        return (<li key={requester._id} className="collection-item avatar">
          <i className="material-icons circle">user</i>
          <span className="title">{requester.username}</span>
          <p><button onClick={this.accept.bind(this, requester)} ><i className="material-icons">check</i></button>
          <button onClick={this.deny.bind(this, requester)} ><i className="material-icons">cancel</i></button></p>
          <Link to={"users/" + requester.username} className="secondary-content"><i className="material-icons">send</i></Link>
        </li>)
      })
    }
  }

  /**
   * Content to be displayed when user data are available.
   * @access private
   * @returns {jsx}
   */
  render(){
    return (<div>
      <Helmet
        title="Friend requests"
      />
      <h1><a href={FlowRouter.path("/")}><i className="material-icons">arrow_back</i></a> Friendships requests</h1>
      <ul className="collection">
        {this.request()}
      </ul>
    </div>)
  }
}
