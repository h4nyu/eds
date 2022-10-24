module.exports = {
  stories: ["../**/stories.@(js|jsx|ts|tsx)"],
  addons: [
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
}
