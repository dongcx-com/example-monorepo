/**
 * @type {import("prettier").Config}
 * @see https://www.prettier.cn/docs/options.html
 */

export default {
	// 指定最大换行长度
	printWidth: 120,
	// 缩进制表符宽度 | 空格数
	tabWidth: 2,
	// 使用制表符而不是空格缩进（true：制表符，false：空格）
	useTabs: true,
	// 结尾用分号（true：用分号，false：不用分号）
	semi: true,
	// 使用双引号（true：单引号，false：双引号）
	singleQuote: false,
	// 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// 在JXS中使用双引号而不是单引号（true：单引号，false：双引号）
	jsxSingleQuote: false,
	// 多行时尽可能打印尾随逗号 可选值 "<none|es5|all>"
	trailingComma: "none",
	// 在对象，数组括号与文字之间加空格 "{ foo: bar }"（true：有，false：没有）
	bracketSpacing: true,
	// 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行（true：行尾，false：单独一行）
	bracketSameLine: true,
	// 箭头函数参数只有一个时是否省略括号（avoid：省略，always：不省略）
	arrowParens: "avoid",
	// 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false,
	// 可以在文件顶部插入一个特殊标记，指定该文件已用 Prettier 格式化
	insertPragma: false,
	// 用于控制文本是否应该被换行以及如何换行
	proseWrap: "preserve",
	// 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值，"strict" - 空格被认为是敏感的，"ignore" - 空格被认为是不敏感的
	htmlWhitespaceSensitivity: "css",
	// 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
	vueIndentScriptAndStyle: false,
	// 换行符使用 lf 结尾 可选值 "<auto|lf|crlf|cr>"
	endOfLine: "auto",
	// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码（rangeStart：开始，rangeEnd：结束）
	rangeStart: 0,
	rangeEnd: Infinity
};
