import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/" >home</Link>
          <Link to="/create" >Nouveau club</Link>
        </nav>
        <div className="section">
          <div className="container">
            { React.cloneElement(this.props.children, this.props) }
          </div>
        </div>
      </div>
    );
  }
}
