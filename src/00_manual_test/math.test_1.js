const formatNumStr = require('./math');

let expected = '';
let result = '';

expected = '04';
result = formatNumStr(4);

if (result !== expected) {
    throw new Error(`formatNumStr(4) 应该等于 ${expected}, 但实际结果是 ${result}`);
}

expected = '12';
result = formatNumStr(12);

if (result !== expected) {
    throw new Error(`formatNumStr(12) 应该等于 ${expected}, 但实际结果是 ${result}`);
}


console.log("pass");
