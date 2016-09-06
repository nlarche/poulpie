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
    const input = document.getElementById(this.props.id);
    this.searchBox = new google.maps.places.Autocomplete(input);
    this.searchBox.addListener('place_changed', this.onPlacesChanged);
  }
  onPlacesChanged() {
    this.place = this.searchBox.getPlace();

    this.updateForm(this.place);
  }
  updateForm(place) {
    this.refs.input.onChange({
      target: {
        value: place.formatted_address
      }
    });
  }
  render() {
    return (
      <div className="control" >
        <InputComponent ref="input"{...this.props} />
      </div>);
  }
}

