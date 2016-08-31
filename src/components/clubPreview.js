import React from 'react';
import { Link } from 'react-router';

export default class ClubPreview extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { club } = this.props;
    return (
      <div>
        <div>{club.name}</div>
        <div>{club.logo}</div>
        <div>{club.tel}</div>
        <div>{club.email}</div>
        <div>{club.website}</div>
        <div>{club.address}</div>
        <div>
          <Link to={`/club/${club.id}`} > detail</Link>
        </div>
      </div>
    );
  }
}
