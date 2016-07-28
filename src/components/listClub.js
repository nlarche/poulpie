import React from 'react';
import ItemListClub  from './itemListClub';

import { list as data   } from '../mock/mock';

export default class ListClub extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          { data.map((club, i) => <ItemListClub key={i} i={i} item={club} {...this.props} />) }
        </div>
        <div>
           {this.props.children}
        </div>
      </div>
    );
  }
}
