import React from 'react';
import classnames from 'classnames';

import InputComponent from './form/input-component';
import GooglePlaceInput from './form/google-place-input';
import isRequire from './form/validation/isRequire';

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
    this.annuler = this.annuler.bind(this);
  }
  annuler() {
    this.context.router.goBack();
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
      // wait all state change
      setTimeout(() => {
        this.props.addClub(this.state.form);
        this.context.router.goBack();
      }, 100);
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
      { label: 'logo', optional: true },
      { label: 'site internet', id: 'website', optional: true },
      { label: 'email', validateFn: isRequire },
      { label: 'tel', validateFn: isRequire },
      ,
    ];
    const address = { label: 'adresse', id: 'address', validateFn: isRequire };
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          { formInput.map((input, i) =>
            <InputComponent ref={i} key={i} {...input} onChange={this.onChange} />)
          }
          <GooglePlaceInput {...address} onChange={this.onChange} />
          <p className="control">
            <button className="button is-primary" >Créer nouveau club</button>
            <button className="button" onClick={this.annuler} >Annuler</button>
          </p>
        </form>
      </div>
    );
  }
}

ClubForm.contextTypes = {
  router: React.PropTypes.object
};


