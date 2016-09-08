import test from 'ava';

import isRequire from '../isRequire';
import MESSAGES from '../messages';

const message = MESSAGES.isRequire;

test('no param, should return a require message a not to be valid', t => {
  const rslt = isRequire();
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('empty string, should return a require message a not to be valid', t => {
  const rslt = isRequire('');
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('null, should return a require message a not to be valid', t => {
  const rslt = isRequire(null);
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('undefined, should return a require message a not to be valid', t => {
  const rslt = isRequire(undefined);
  t.false(rslt.valid);
  t.true(rslt.message === message);
});

test('should return a require message a not to be valid', t => {
  const rslt = isRequire('this is ok');
  t.true(rslt.valid);
  t.true(rslt.message === undefined);
});
