const square = require('./square');

describe('square', () => {
    let mockValue;

    beforeEach(() => {}); // вызывается перед каждым тестом

    beforeAll(() => {}); // вызывается единожды перед запуском всех тестов

    test('Корректное значение', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
    });

    afterEach(() => {}); // вызывается после каждого теста
    afterAll(() => {}); // вызывается после всех тестов
});
