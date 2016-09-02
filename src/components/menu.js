import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <nav className="nav">
          <div className="nav-left">
            <Link className="nav-item" to="/" >Home</Link>
          </div>
          <div className="nav-center">
            <Link className="nav-item" activeClassName="is-active" to="/create" >Nouveau club</Link>
          </div>
          <div className="nav-right nav-menu">
            <Link className="nav-item" activeClassName="is-active" to="/doc" >Documentation</Link>
            <Link className="nav-item" activeClassName="is-active" to="/blog" >Blog</Link>
            <span className="nav-item">
              <a className="button is-primary" href="#">
                <span className="icon">
                  <i className="fa fa-user"></i>
                </span>
                <span>Log in</span>
              </a>
            </span>
          </div>
        </nav>
    );
  }
}

Menu.contextTypes = {
  router: React.PropTypes.object
};

