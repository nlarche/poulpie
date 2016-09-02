import React from 'react';
import { findDOMNode } from 'react-dom';

import InputComponent from './input-component';
/**
 *  Add this script in index.html
 * <script type="text/javascript"
 *  src="https://maps.google.com/maps/api/js?libraries=places"></script>
 */
export default class GooglePlaceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }
  componentDidMount() {
    const input = findDOMNode(this.refs.child.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
  }
  render() {
    return (
      <div className="control" >
          <InputComponent ref="child" {...this.props} />
      </div>);
  }
}

