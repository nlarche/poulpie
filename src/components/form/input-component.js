import React from 'react';
import classnames from 'classnames';

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

    if (this.state.validateFn && typeof this.state.validateFn === 'function') {

      const validation = this.state.validateFn(e.target.value);

      this.setState({
        isInvalid: !validation.valid,
        invalidMessage: validation.message
      });
    }
  }
  render() {
    const inputClass = classnames({
      "input": true,
      "is-danger": this.state.isInvalid,
    });

    return (
      <div>
        <label className="label" htmlFor={this.state.id} >{this.state.label}</label>
        <p className="control">
          <input className={inputClass} name={this.state.id} type="text" value={this.state.value}
            onChange={this.onChange} onBlur={this.onBlur} placeholder={this.state.placeholder} />
          {
            this.state.isInvalid ?
              <span className="help is-danger">{this.state.invalidMessage}</span> : ''
          }
        </p>
      </div>
    );
  }
}
