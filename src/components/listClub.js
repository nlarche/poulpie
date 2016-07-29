import React from 'react';
import ItemListClub  from './itemListClub';
import ClubPreview  from './clubPreview';

export default class ListClub extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          { this.props.clubs ?
              this.props.clubs.map((club, i) =>
              <ItemListClub key={i} i={i} item={club} {...this.props} />)
             : '' }
        </div>
        <div>
           {this.props.selectedClub ? <ClubPreview club={this.props.selectedClub} /> : ''}
        </div>
      </div>
    );
  }
}
