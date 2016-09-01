export default function isRequire(value) {
  if (!value) {
    return {
      valid: false,
      message: 'Champs obligatoire'
    };
  } else {
    return { valid: true };
  }
}
