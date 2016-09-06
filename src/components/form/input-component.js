import React from 'react';
import classnames from 'classnames';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
       ...props
    };

    if (!this.state.id) {
      this.state.id = this.state.label;
    }

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e) {
    const newValue = e.target.value;

    this.setState({ value: newValue });

    this.props.onChange({
      id: this.state.id,
      newValue: newValue,
      isValid: !this.state.isInvalid
    });
  }
  onBlur(e) {
    this.validate();
  }
  validate() {
    if (this.state.validateFn && typeof this.state.validateFn === 'function') {

      const validation = this.state.validateFn(this.state.value);

      this.setState({
        isInvalid: !validation.valid,
        invalidMessage: validation.message
      });
      return validation.valid;
    } else {
      // else always valid
      return true;
    }
  }
  render() {
    const inputClass = classnames({
      "input": true,
      "is-danger": this.state.isInvalid,
    });

    return (
      <div className="control" >
        <div className="control is-horizontal" >
          <label className="label" htmlFor={this.state.id} >
                  {capitalizeFirstLetter(this.state.label)}
          </label>
          {
            this.state.optional ? <i>-Optionel</i> : null
          }
        </div>
        <p className="control">
          <input className={inputClass} id={this.state.id} name={this.state.id} type="text" value={this.state.value}
            onChange={this.onChange} onBlur={this.onBlur} placeholder={this.state.placeholder}
            autoComplete="off"/>
          {
            this.state.isInvalid ?
              <span className="help is-danger">{this.state.invalidMessage}</span> : null
          }
        </p>
      </div>
    );
  }
}
