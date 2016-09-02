import React from 'react';

import Menu from './menu';

export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div >
        <section className="hero is-primary">
          <div className="hero-head" >
            <div className="container">
              <Menu />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            { React.cloneElement(this.props.children, this.props) }
          </div>
        </section>
      </div>
    );
  }
}
