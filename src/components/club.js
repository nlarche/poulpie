import React from 'react';

export default class Club extends React.Component {
  constructor() {
    super();
  }
  render() {

    const { clubId } = this.props.params;

    const i = this.props.clubs.findIndex((club) => club.id === clubId);
    const club = this.props.clubs[i];

    return (
      <div>
        <div>{club.name}</div>
        <div>{club.logo}</div>
        <div>{club.tel}</div>
        <div>{club.email}</div>
        <div>{club.website}</div>
        <div>{club.address}</div>
      </div>
    );
  }
}
