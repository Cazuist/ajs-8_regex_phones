import Validator from '../validator';

describe('Начинаем тестирование метода validateUsername', () => {
  test('Должен выбросить исключение на вызов без аргументов', () => {
    expect(() => Validator.validateUsername()).toThrow('Никнейм не передан!');
  });

  test.each([
    ['nick@name', false],
    ['nick.name', false],
    [' ', false],
    ['nick!name', false],
    ['nick1234name', false],
    ['12name', false],
    ['name12', false],
    ['_name', false],
    ['name_', false],
    ['-name', false],
    ['name-', false],
    ['nick123name', true],
    ['nick_123name', true],
    ['nick-123name', true],
  ])(
    ('Для значения <%s> должны получить <%s>'),
    (nickname, expected) => {
      const isValid = Validator.validateUsername(nickname);

      expect(isValid).toBe(expected);
    },
  );
});

describe('Начинаем тестирование метода formatUserPhone', () => {
  test('Должен выбросить исключение на вызов без аргументов', () => {
    expect(() => Validator.formatUserPhone()).toThrow('Телефон не передан!');
  });

  test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
  ])(
    ('Для значения <%s> должны получить <%s>'),
    (phone, expected) => {
      const received = Validator.formatUserPhone(phone);

      expect(received).toBe(expected);
    },
  );
});
