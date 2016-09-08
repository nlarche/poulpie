import test from 'ava';

import isValidEmail from '../isValidEmail';
import MESSAGES from '../messages';

const message = MESSAGES.isValidEmail;

test('valid email - 0, should be valid no message', t => {
  const rslt = isValidEmail('test@test.com');
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});

test('invalid email - 0, should return a invalid mail message and shouldnt be valid', t => {
  const rslt = isValidEmail('this is an invalid email');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('invalid email - 1, should return a invalid mail message and shouldnt be valid', t => {
  const rslt = isValidEmail('@email.fr');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('invalid email - 2, should return a invalid mail message and shouldnt be valid', t => {
  const rslt = isValidEmail('email@email');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('invalid email - 3, should return a invalid mail message and shouldnt be valid', t => {
  const rslt = isValidEmail('email@.fr');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('invalid email - 4, should return a invalid mail message and shouldnt be valid', t => {
  const rslt = isValidEmail('email@.fr.com.io.eu');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('no param, shouldnt return a message a sould be valid', t => {
  const rslt = isValidEmail();
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});

test('empty string, shouldnt return a message a sould be valid', t => {
  const rslt = isValidEmail('');
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});

test('null, shouldnt return a message a sould be valid', t => {
  const rslt = isValidEmail(null);
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});

test('undefined, shouldnt return a message a sould be valid', t => {
  const rslt = isValidEmail(undefined);
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});
