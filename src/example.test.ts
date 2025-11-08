// тест
test('should return Hello world!', () => {
  expect('Hello world!').toBe('Hello world!');
});

// блок тестов
describe('Adds', () => {
  test('should return 2 when we add one and one', () => {
    expect(1 + 1).toBe(2);
  });

  test('should return 3 when we add one and 2', () => {
    expect(1 + 2).toBe(3);
  });

  // можно вкладывать вложености
  describe('asyncs add', () => {
    // ассинхронный тест
    test('should return 4 when we add 2 and 2', async () => {
      expect(2 + 2).toBe(4);
    });
  });
});
