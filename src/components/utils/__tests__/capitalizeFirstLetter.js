import test from 'ava';

import capitalizeFirstLetter from '../capitalizeFirstLetter';

test('Capitalize the first letter', t => {
  let rslt = capitalizeFirstLetter('hello');
  t.true(rslt === 'Hello');
  rslt = capitalizeFirstLetter('Hello');
  t.true(rslt === 'Hello');
  rslt = capitalizeFirstLetter('hELlo');
  t.true(rslt === 'HELlo');
});

