function sumLesson4(a) {
    return function (b) {
        return a + b;
    };
}

console.log('sum:', sumLesson4(5)(2));

test('Function myst return 7', () => {
    expect(sumLesson4(5)(2).toBe(7);
});
