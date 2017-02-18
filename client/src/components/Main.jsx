import React from 'react'

import {Link} from 'react-router'

class Main extends React.Component {
  render(){
    return (
      <div>
        <h4>Main App</h4>
        <ul>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

export default Main;
