## pnpm monorepo

```shell
touch pnpm-workspace.yaml
```

```yaml
# pnpm-workspace.yaml

packages:
  - "apps/*"
  - "packages/*"
```

执行工程级命令

```shell
pnpm --workspace-root [...]
```

或

```shell
pnpm -w [...]
```

执行子包命令

```shell
进入子目录中执行
```

或

```shell
pnpm -C 子包路径 [...]
```

## 环境版本锁定

```json
// package.json

"engines": {
	"node": ">=18",
	"pnpm": ">=8",
	"npm": ">=9"
}
```

```json
// .npmrc

engine-strict=true
```

## TypeScript

```shell
pnpm add -Dw typescript @types/node
```

```shell
touch tsconfig.json
```

```json
// tsconfig.json

{
	"compilerOptions": {
		"baseUrl": ".",
		"target": "esnext",
		"module": "esnext",
		"types": [],
		"lib": ["esnext"],
		"sourceMap": true,
		"declaration": true,
		"declarationMap": true,
		"noUncheckedIndexedAccess": true,
		"exactOptionalPropertyTypes": true,
		"strict": true,
		"verbatimModuleSyntax": true,
		"moduleResolution": "bundler",
		"isolatedModules": true,
		"noUncheckedSideEffectImports": true,
		"moduleDetection": "force",
		"skipLibCheck": true
	},
	"exclude": ["node_modules", "dist"]
}
```

## 代码风格与质量检查

### **prettier**

```shell
pnpm add -Dw prettier
```

```shell
touch prettier.config.js
```

```js
// prettier.config.js

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
```

prettier 忽略项

```shell
touch .prettierignore
```

```shell
# .prettierignore

dist
public
node_modules
pnpm-lock.yaml
.local
```

prettier 脚本命令

```json
// package.json

"scripts": {
  "lint:prettier": "prettier --write \"**/*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}\""
}
```

执行命令

```shell
pnpm run lint:prettier
```

或

```shell
pnpm lint:prettier
```

### **EsLint**

```shell
pnpm add -Dw eslint@latest @eslint/js globals typescript-eslint eslint-plugin-prettier eslint-plugin-vue eslint-config-prettier
```

| 类别                                          | 库名                                                                        |
| --------------------------------------------- | --------------------------------------------------------------------------- |
| <font color="#cd164a">核心引擎</font>         | <font color="#6998ba">eslint</font>                                         |
| <font color="#cd164a">官方规则集</font>       | <font color="#6998ba">@eslint/js</font>                                     |
| <font color="#cd164a">全局变量支持</font>     | <font color="#6998ba">globals</font>                                        |
| <font color="#cd164a">TypeScript 支持</font>  | <font color="#6998ba">typescript-eslint</font>                              |
| <font color="#cd164a">类型定义（辅助）</font> | <font color="#6998ba">@types/node</font>                                    |
| <font color="#cd164a">Prettier 集成</font>    | <font color="#6998ba">eslint-plugin-prettier, eslint-config-prettier</font> |
| <font color="#cd164a">Vue 支持</font>         | <font color="#6998ba">eslint-plugin-vue</font>                              |

配置

```shell
touch eslint.config.js
```

```js
// eslint.config.js

import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const ignores = ["**/node_modules/**", "**/dist/**", ".*", "scripts/**", "**/*.d.ts", "commitlint.config.js"];

export default defineConfig(
	// 通用配置
	{
		ignores,
		extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier], // 继承规则
		plugins: {
			prettier: eslintPluginPrettier
		},
		languageOptions: {
			ecmaVersion: "latest", // ecma语法支持版本
			sourceType: "module", // 模块化类型
			parser: tseslint.parser // 解析器
		},
		rules: {
			// 自定义
		}
	},
	// 前端配置
	{
		ignores,
		files: ["apps/frontend/**/*.{ts,js,tsx,jsx,vue}", "packages/components/**/*.{ts,js,tsx,jsx,vue}"],
		extends: [...eslintPluginVue.configs["flat/recommended"], eslintConfigPrettier],
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	},
	// 后端配置
	{
		ignores,
		files: ["apps/backend/**/*.{ts,js}"],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	}
);
```

脚本命令

```json
// package.json

"scripts": {
  "lint:eslint": "eslint",
}
```

### **拼写检查**

VS Code 插件：`Code Spell Checker`

安装

```shell
pnpm add -Dw cspell @cspell/dict-lorem-ipsum
```

配置

```shell
touch cspell.json
```

```json
// cspell.json

{
	"import": ["@cspell/dict-lorem-ipsum/cspell-ext.json"],
	"caseSensitive": false,
	"dictionaries": ["custom-dictionary"],
	"dictionaryDefinitions": [
		{
			"name": "custom-dictionary",
			"path": "./.cspell/custom-dictionary.txt",
			"addWords": true
		}
	],
	"ignorePaths": [
		"**/node_modules/**",
		"**/dist/**",
		"**/build/**",
		"**/lib/**",
		"**/docs/**",
		"**/vendor/**",
		"**/public/**",
		"**/static/**",
		"**/tmp/**",
		"**/out/**",
		"**/*.d.ts",
		"**/package.json",
		"**/*.md",
		"**/stats.html",
		"eslint.config.js",
		".gitignore",
		".prettierignore",
		"cspell.json",
		"commitlint.config.js",
		".cspell"
	]
}
```

自定义字典

```shell
mkdir -p ./.cspell && touch ./.cspell/custom-dictionary.txt
```

检查脚本

```json
// package.json

"scripts": {
  "lint:spellCheck": "cspell lint \"(packages|apps)/**/*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}\""
}
```

## Git提交规范

```shell
touch .gitignore
```

```shell
# .gitignore

# node
node_modules/
dist/
build/
.env
.env.*
*.log
npm-debug.log*
pnpm-debug.log*

# IDE
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS
*.DS_Store
Thumbs.db

# TypeScript
*.tsbuildinfo

# Misc
coverage/
*.local
*.cache
*.tmp

# Git
.git/
```

### **commitizen**

```shell
pnpm add -Dw @commitlint/cli @commitlint/config-conventional commitizen cz-git
```

> [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) 是 [commitlint](https://commitlint.nodejs.cn/) 的核心  
> [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) 是基于 conventional commits 规范的配置文件  
> [commitizen](https://www.npmjs.com/package/commitizen) 提供了一个交互式撰写 commit 信息的插件  
> [cz-git](https://cz-git.qbb.sh/zh/) 是一款工程性更强，轻量级，高度自定义，标准输出格式的 commitizen 适配器

配置命令

```json
// package.json

"scripts": {
  "commit": "git-cz"
},
"config": {
	"commitizen": {
		"path": "./node_modules/cz-git"
	}
}
```

配置 cz-git

```shell
touch commitlint.config.js
```

```js
// commitlint.config.js

/** @type {import("cz-git").UserConfig} */
export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [1, "always"],
		"header-max-length": [2, "always", 108],
		"subject-empty": [2, "never"],
		"type-empty": [2, "never"],
		"subject-case": [0],
		"type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore"]]
	},
	prompt: {
		types: [
			{ value: "feat", name: "✨  新功能：新增功能", emoji: ":sparkles:" },
			{ value: "fix", name: "🐛  修复：修复缺陷", emoji: ":bug:" },
			{ value: "docs", name: "📝  文档：更新文档", emoji: ":memo:" },
			{
				value: "style",
				name: "💄  样式：格式调整（不影响代码运行）",
				emoji: ":lipstick:"
			},
			{
				value: "refactor",
				name: "♻️   重构：代码重构（不新增功能也不修复bug）",
				emoji: ":recycle:"
			},
			{
				value: "perf",
				name: "⚡️  性能：提升性能",
				emoji: ":zap:"
			},
			{
				value: "test",
				name: "✅  测试：添加测试",
				emoji: ":white_check_mark:"
			},
			{
				value: "chore",
				name: "🔨  工具：更改构建流程或辅助工具",
				emoji: ":hammer:"
			},
			{
				value: "revert",
				name: "⏪️  回滚：回滚代码",
				emoji: ":rewind:"
			}
		],
		useEmoji: true,
		emojiAlign: "center",
		scopes: ["root", "backend", "frontend", "components", "utils"],
		allallowCustomScopes: true,
		skipQuestions: ["body", "footerPrefix", "footer", "breaking"],
		messages: {
			type: "📌 请选择提交类型:",
			scope: "🎯 请选择影响范围（可选）:",
			subject: "📝 请简要描述更改:",
			body: "📄 详细描述（可选）:",
			footer: "🔗 关联的 ISSUE 或 BREAKING CHANGE（可选）:",
			confirmCommit: "✅ 确认提交？"
		}
	}
};
```

> **Tip**  
> [commitizen](https://www.npmjs.com/package/commitizen) 的 `git-cz` 命令默认会检测 `package.json` 中 `scripts` 配置的 `precommit` 属性命令，并在执行 `git-cz` 命令前先执行 `precommit` 命令，所以在安装了 `husky` 并配置了 `pre-commit` 钩子后，可能会造成重复检查的情况

### **husky**

```shell
pnpm add -Dw husky
```

初始化

```shell
pnpx husky init
```

配置 pre-commit 钩子

```sh
#!/usr/bin/env sh
pnpm lint:prettier && pnpm lint:eslint && pnpm lint:spellCheck
```

> **Tip**  
> 尽管 [commitizen](https://www.npmjs.com/package/commitizen) 提供了在执行 `git-cz` 命令前优先执行 `precommit` 命令的功能，能够实现与 `husky` 的 `pre-commit` 钩子的功能一样的效果，但是倘若开发者绕过 `git-cz` 命令，直接执行 `git commit` 命令，那么 `precommit` 命令就不会被触发，但是 `husky` 的 `pre-commit` 钩子却依然会被触发，因此需要写脚本来防止重复检查的情况发生

### **lint-staged**

```shell
pnpm add -Dw lint-staged
```

配置命令

```json
// package.json

scripts: {
    "precommit": "lint-staged"
}
```

配置文件

```shell
touch .linstagedrc.js
```

```js
// .linstagedrc.js

export default {
	"*.{js,ts,mjs,cjs,json,tsx,css,less,scss,vue,html,md}": ["cspell lint"],
	"*.{js,ts,vue,md}": ["prettier --write", "eslint"]
};
```

## 未完待续...
