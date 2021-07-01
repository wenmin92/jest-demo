const formatNumStr = require('./math');

test('formatNumStr(4)', () => {
    expect(formatNumStr(4)).toBe('04');
});
test('formatNumStr(12)', () => {
    expect(formatNumStr(12)).toBe('12');
});
