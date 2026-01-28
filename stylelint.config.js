module.exports = {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  rules: {
    // Исключение для неизвестных селекторов
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['deep'],
      },
    ],
    // Исключение для scss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'for', 'use'],
      },
    ],
    // Запрет на дубликат классов
    'no-duplicate-selectors': true,
    // Запрет правильных пробелов
    'no-irregular-whitespace': true,
    // Запрет на неизвесные свойства
    'property-no-unknown': true,
    // Паттерн написания классов по методологии BEM
    'selector-class-pattern': [
      '^([a-z]+-)?[a-z0-9\\-_]+$',
      {
        message: 'Не соблюдается метадолгия BEM',
      },
    ],
  },
}
