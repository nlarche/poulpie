import MESSAGES from './messages';

export default function isRequire(value) {
  if (!value) {
    return {
      valid: false,
      message: MESSAGES.isRequire
    };
  } else {
    return { valid: true };
  }
}
