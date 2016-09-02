import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import InputComponent from '../input-component';

test('Render an Input', t => {
  const props = { label: 'label', placeholder: 'placeHolder' };
  const wrapper = shallow(<InputComponent key="0" ref="0" { ...props } />);

  t.is(wrapper.find('label').props().children, 'Label');
  t.is(wrapper.find('label').props().htmlFor, 'label');
  t.not(wrapper.find('input'), undefined);
  t.is(wrapper.find('input').props().name, 'label');
  t.is(wrapper.find('input').props().placeholder, 'placeHolder');
  t.is(wrapper.find('input').props().autoComplete, 'off');
});


test('Render an Input with id', t => {
  const props = { label: 'label', id: 'id' };
  const wrapper = shallow(<InputComponent key="0" ref="0" { ...props } />);

  t.is(wrapper.find('label').props().children, 'Label');
  t.is(wrapper.find('label').props().htmlFor, 'id');
  t.not(wrapper.find('input'), undefined);
  t.is(wrapper.find('input').props().name, 'id');
});


test('Render an required Input', t => {

  function valide(e) {
    return {
      valid: e ? true : false,
      message: 'message'
    };
  }

  let nbChange = 0;
  function onChange() {
    nbChange++;
  }

  const props = { label: 'label', validateFn: valide };
  const wrapper = shallow(<InputComponent key="0" ref="0" { ...props } onChange={onChange} />);

  t.falsy(wrapper.find('input').hasClass('is-danger'));

  wrapper.find('input').simulate('blur');

  t.truthy(wrapper.find('input').hasClass('is-danger'));
  t.truthy(wrapper.find('span').hasClass('is-danger'));
  t.is(wrapper.find('span').props().children, 'message');

  wrapper.find('input').simulate('change', { target: { value: 'newValue' } });
  t.is(nbChange, 1);
  t.is(wrapper.find('input').props().value, 'newValue');

  wrapper.find('input').simulate('blur');
  t.falsy(wrapper.find('input').hasClass('is-danger'));
});


test('Render an optional Input', t => {
  const props = { label: 'label', optional: true };
  const wrapper = shallow(<InputComponent key="0" ref="0" { ...props } />);

  t.is(wrapper.find('i').props().children, '-Optionel');


  wrapper.find('input').simulate('blur');

  t.falsy(wrapper.find('input').hasClass('is-danger'));
  t.falsy(wrapper.find('span').hasClass('is-danger'));

});


