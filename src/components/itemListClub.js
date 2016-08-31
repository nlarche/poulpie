import React from 'react';
import { Link } from 'react-router';

export default class ItemListClub extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;
    return (
      <div >
        <div>{item.name}</div>
        <div>{item.logo}</div>
        <div>{item.address}</div>
        <button onClick={this.props.selectClub.bind(null, item)}> button</button>
        <div>
          <Link to={`/club/${item.id}`} > detail</Link>
        </div>
      </div>
    );
  }
}
