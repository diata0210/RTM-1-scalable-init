module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Add your custom rules here
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'custom']],
    // Add your additional custom rule here
    'custom-rule': [2, 'always', ['custom1', 'custom2', 'custom3', 'custom4']],
  },
};
