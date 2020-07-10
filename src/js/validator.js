export default class Validator {
  static validateUsername(name) {
    if (arguments.length === 0) {
      throw new Error('Никнейм не передан!');
    }

    if (/[^a-z\d_-]+/i.test(name)) {
      return false;
    } if (/\d{4,}/gi.test(name)) {
      return false;
    } if (!/^[a-z]+(.)*[a-z]+$/i.test(name)) {
      return false;
    }
    return true;
  }

  static formatUserPhone(phone) {
    if (arguments.length === 0) {
      throw new Error('Телефон не передан!');
    }

    const replacedNumber = phone.replace(/[^\d]/g, '');

    if (replacedNumber.length === 11) {
      return `+7${replacedNumber.slice(-10)}`;
    }
    return `+${replacedNumber}`;
  }
}
