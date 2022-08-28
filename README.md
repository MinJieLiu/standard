# @micro-web/standard

`typescript` + `eslint airbnb style` + `stylelint` + `prettier` = ❤

### .eslintrc.cjs

```js
module.exports = {
  extends: [require.resolve('@micro-web/standard/eslint.cjs')],
};
```

### .stylelintrc.cjs

```js
module.exports = require('@micro-web/standard/stylelint.cjs');
```

### .prettierrc.cjs

```js
module.exports = require('@micro-web/standard/prettier.cjs');
```

### .npmrc

```bash
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*stylelint*
public-hoist-pattern[]=*prettier*
```
