import React from 'react';
import { Link } from 'react-router';

export default class ItemListClub extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { item } = this.props;
    const link = "/club/" + item.id;
    return (
      <div>
        <div>{item.name}</div>
        <div>{item.logo}</div>
        <div>{item.adress}</div>
        <div>
          <Link to={link} > detail</Link>
        </div>
      </div>
    );
  }
}
