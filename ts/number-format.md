# 数字格式化

<https://juejin.cn/post/7095986148152967182>

科学计数法转化成数字

```js
/**
 * @description 把有可能是科学技术法的数字转换为 数字字符串
 * @param {string | Number} num
 * @returns {string}
 * @example exponentToNumber(9.2e-7) --> 0.00000092
 */
export const exponentToNumber = (num) => {
	if (isNaN(num)) {
		console.warn(`exponentialToNum 转换失败: ${num} 参数非数字格式！`);
		return 0;
	}
	var m = Number(num).toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    // ['9.2e-7', '2', '-7', index: 0, input: '9.2e-7', groups: undefined]
	return Number(num).toFixed(Math.max(0, (m[1] || '').length - m[2]));
};
```

去掉小数位多余的0

```js
/**
 * @description 去掉小数位多余的0
 * @param {String} number 要处理的数字字符串
 * @return {string}
 * @example clearzero(520.2100) --> '520.21'
 */
export const clearzero = (number) => {
	return `${number}`.replace(/(?:\.0*|(\.\d+?)0+)$/, '$1');
};

```

小数位处理 少则补0多则截取(包含了科学计数的处理)

```js
/**
 * @description 小数位处理 少则补0多则截取, 包含了科学计数的处理
 * @param {string} number 要处理的数字字符串
 * @param {string} digits 要保留的位数
 * @param {boolean} isFill 是否要自动补0 默认true
 * @return {string}
 * zeroize(12.3456,5,true) --> '12.34560'
 */
// 需用到上面的方法一
export const zeroize = (number, digits, isFill = true) => {
	if (isNaN(number)) {
		console.warn(`zeroize 转换失败: ${number} 参数非数字格式！`);
		return `0.${'0'.repeat(digits)}`;
	}
	let _number = exponentToNumber(number);// 转成正常的数字
    // 整数
	if (`${_number}`.indexOf('.') == -1) {
        // 整数需补零
		if (isFill) {
			return `${_number}.${'0'.repeat(digits)}`;
		}
		return _number;
	}
    // 非整数
	return `${_number}`.replace(/(\d+)\.(\d+)/, (all, $1, $2) => {
        // console.log(all,$1,$2) // 12.3456 12 3456
		const len = digits - $2.length;
		const point = len > 0 ? `${$2}${isFill ? '0'.repeat(len) : ''}` : $2.slice(0, digits);
		return `${$1}.${point}`;
	});
};

```

把数字转换为千分位分割

```js
/**
 * @description 把数字转换为千分位分割
 * @param {string | Number } num 要转换的数字或数字字符串
 * @param {string } [lang] 要根据语言区分 分隔符, 例如 vi-VN 转换后  1.222.33,05
 * @returns {string}
 * @example thousands(1234567.89) --> 1,234,567.89
 */
export const thousands = (num, lang) => {
	let separator = [',', '.'];
	let _lang = lang || 'zh-CN'; // 默认中文
	if (_lang && _lang == 'vi-VN') { 
		separator.reverse();
	}
	var parts = num.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator[0]);
	return parts.join(separator[1]);
};

```

数据格式化

```js
/** 
* @description 把数字转换为中文描述 (保留2位小数，向上取整)
* @param {Number } num 要转换的数字
* @returns {string} * @example numberUnitConver(10008952) --> '1000.90万'
*/
export const numberUnitConver = (value) => { 
    let param = {}; 
    let k = 10000, sizes = ['', '万', '亿', '万亿'], i; 
    if (value < k) { 
        param.value = value; 
        param.unit = ''; 
    } else { 
        i = Math.floor(Math.log(value) / Math.log(k)); 
        param.value = (value / Math.pow(k, i)).toFixed(2); 
        param.unit = sizes[i]; 
    } 
    return `${param.value}${param.unit}`; 
};

```
