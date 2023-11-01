const validateValue = require('./validateValue');

test('Валидация теста', () => {
    // название, а в коллбэке сама функция
    expect(validateValue(99)) // в expect передаем резуьтат вычислений
        // после отработки expect можно вызвать методы для проверки резултата
        .toBe(true);
    // тест упадет, тк 150 больше 100, и мы не получим true
});

describe('validateValue', () => {
    // если проверяем несколько сценариев, то оборачиваем все функции в describe
    test('Корректное', () => {
        expect(validateValue(10)).toBe(true);
    });

    test('Меньше корректного', () => {
        expect(validateValue(-10)).toBe(false);
    });

    test('Больше корректного', () => {
        expect(validateValue(1110)).toBe(false);
    });
});
