import { types } from "util";

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
  },
  prompt: {
    types: [
      { value: "feat", name: "✨  新功能：新增功能", emoji: ":sparkles:" },
      { value: "fix", name: "🐛  修复：修复缺陷", emoji: ":bug:" },
      { value: "docs", name: "📝  文档：更新文档", emoji: ":memo:" },
      {
        value: "style",
        name: "💄  样式：格式调整（不影响代码运行）",
        emoji: ":lipstick:",
      },
      {
        value: "refactor",
        name: "♻️   重构：代码重构（不新增功能也不修复bug）",
        emoji: ":recycle:",
      },
      {
        value: "perf",
        name: "⚡️  性能：提升性能",
        emoji: ":zap:",
      },
      {
        value: "test",
        name: "✅  测试：添加测试",
        emoji: ":white_check_mark:",
      },
      {
        value: "chore",
        name: "🔨  工具：更改构建流程或辅助工具",
        emoji: ":hammer:",
      },
      {
        value: "revert",
        name: "⏪️  回滚：回滚代码",
        emoji: ":rewind:",
      },
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
      confirmCommit: "✅ 确认提交？",
    },
  },
};
