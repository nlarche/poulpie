import React from 'react';
import classnames from 'classnames';

import InputComponent from './form/input-component';

const InputForm = (input) => {
  if (!input.ref) {
    input.ref = input.label;
  }
  const inputClass = classnames({
    "input": true,
    "is-danger": input.isInvalid,
  });

  return (
    <div key={input.ref}>
      <label className="label">{input.label}</label>
      <p className="control">
        <input className={inputClass} type="text" ref={input.ref}
          placeholder={input.placeholder} onBlur={input.validate(input) }/>
        {
          input.isInvalid ? <span className="help is-danger">{input.invalidMessage}</span> : ''
        }
      </p>
    </div>
  );
};

export default class ClubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      form : {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addClub(this.state.form);
    this.context.router.goBack();
  }
  onChange(value) {
    const form = this.state.form;
    form[value.ref] = value.newValue;
    this.setState({
      form : form
    });
  }
  render() {

    const formInput = [
      { label: 'nom', ref: 'name', invalidMessage: 'invalid' },
      { label: 'logo' },
      { label: 'site internet', ref: 'website' },
      { label: 'email' },
      { label: 'tel' },
      { label: 'adresse', ref: 'address' },
    ];

    // { formInput.map(InputForm) }
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <InputComponent {...formInput[0]} onChange={this.onChange} />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

ClubForm.contextTypes = {
  router: React.PropTypes.object
};


