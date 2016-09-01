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

    let isValid = true;
    Object.keys(this.refs).forEach((el) => {
      const input = this.refs[el];
      if (input.validate && typeof input.validate === 'function') {
        const valide = input.validate();
        if (isValid) {
          isValid = valide;
        }
      }
    });

    if (isValid) {
      this.props.addClub(this.state.form);
      this.context.router.goBack();
    }

  }
  onChange(value) {
    const form = this.state.form;
    form[value.id] = value.newValue;
    this.setState({
      form: form
    });
  }
  render() {
    const formInput = [
      { label: 'nom', id: 'name', validateFn: isRequire },
      { label: 'logo' },
      { label: 'site internet', id: 'website' },
      { label: 'email', validateFn: isRequire },
      { label: 'tel' },
      { label: 'adresse', id: 'address', validateFn: isRequire },
    ];
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          { formInput.map((input, i) =>
            <InputComponent ref={i} key={i} {...input} onChange={this.onChange} />)
          }
          <p className="control">
            <button className="button is-primary" >Créer nouveau club</button>
            <button className="button" >Annuler</button>
          </p>
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


