import MESSAGES from './messages';

/* eslint-disable */
const regexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}\{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
/* eslint-enable */

export default function isValideEmail(value) {
  if (value && !value.match(regexp)) {
    return {
      valid: false,
      message: MESSAGES.isValidEmail
    };
  } else {
    return { valid: true };
  }
}
