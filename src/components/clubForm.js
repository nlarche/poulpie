import React from 'react';
import classnames from 'classnames';

import InputComponent from './form/input-component';

export default class ClubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        isValid: false
      }
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
    form[value.id] = value.newValue;
    form.isValid = value.isValid;
    this.setState({
      form: form
    });
  }
  render() {
    const formInput = [
      { label: 'nom', id: 'name', validateFn: isRequire },
      { label: 'logo' },
      { label: 'site internet', id: 'website' },
      { label: 'email' },
      { label: 'tel' },
      { label: 'adresse', id: 'address' },
    ];
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          {this.state.isValid}
          { formInput.map((input, i) =>
            <InputComponent key={i} {...input} onChange={this.onChange} />) }
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

function isRequire(value) {
  if (!value) {
    return {
      valid: false,
      message: 'Champs obligatoire'
    };
  } else {
    return { valid: true };
  }
}

ClubForm.contextTypes = {
  router: React.PropTypes.object
};


