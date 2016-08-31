import React from 'react';

export default class ClubForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const logo = this.refs.logo.value;
    const website = this.refs.website.value;
    const email = this.refs.email.value;
    const tel = this.refs.tel.value;
    const address = this.refs.address.value;
    this.props.addClub({ name, logo, website, email, tel, address });
    this.context.router.goBack();
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="nom"/>
          <input type="text" ref="logo" placeholder="logo"/>
          <input type="text" ref="website" placeholder="site internet"/>
          <input type="text" ref="email" placeholder="email"/>
          <input type="text" ref="tel" placeholder="tel"/>
          <input type="text" ref="address" placeholder="adresse"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

ClubForm.contextTypes = {
    router: React.PropTypes.object
  };


