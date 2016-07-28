import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/" >home</Link>
        </div>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}
