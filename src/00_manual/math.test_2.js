const formatNumStr = require('./math');

// expect(real).toBe(expected);

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error("预期是 ${expected}, 实际结果是 ${result}");
            }
        }
    }
}

function test(desc, fn) {
    try {
        fn();
        console.log(`${desc} pass`);
    } catch (error) {
        console.log(`${desc} failed, ${error.message}`);
    }
}

test('formatNumStr(4)', () => {
    expect(formatNumStr(4)).toBe('04');
});
test('formatNumStr(12)', () => {
    expect(formatNumStr(12)).toBe('12');
});