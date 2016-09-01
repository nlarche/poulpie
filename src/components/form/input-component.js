import React from 'react';
import classnames from 'classnames';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
       ...props
    };

    if (!this.state.ref) {
      this.state.ref = this.state.label;
    }

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e) {
    const newText = e.target.value;
    this.setState({ value: newText });
    this.props.onChange({ ref: this.state.ref, newValue: newText });
  }
  onBlur(e) {
    this.setState({ isInvalid: true });
  }
  render() {
    const inputClass = classnames({
      "input": true,
      "is-danger": this.state.isInvalid,
    });

    return (
      <div>
        <label className="label">{this.state.label}</label>
        <p className="control">
          <input className={inputClass} type="text" value={this.state.value}
            onChange={this.onChange} onBlur={this.onBlur} placeholder={this.state.placeholder} />
          {
            this.state.isInvalid ? <span className="help is-danger">{this.state.invalidMessage}</span> : ''
          }
        </p>
      </div>
    );
  }
}
