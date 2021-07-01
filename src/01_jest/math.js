/**
 * 格式化数字
 * @param {string|number} numStr 传入小于2位数的数值或字符串表示的数值
 * @returns 不足2位数时, 前面补0
 */
function formatNumStr(numStr) {
    numStr = typeof numStr === 'string' ? numStr : numStr.toString();
    return numStr.length === 2 ? numStr : `0${numStr}`;
}

module.exports = formatNumStr;
