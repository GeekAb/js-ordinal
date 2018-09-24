Simple utility to translate numeral to their english ordinal representation.

## Install

### npm

```js
npm install --save js-ordinal
```

### yarn

```js
yarn add js-ordinal
```

## Few Examples

``` javascript
const o = require('js-ordinal')

o.toOrdinal(1) // '1st'
o.toOrdinal(2) // '2nd'

o.toOrdinal(11) // '11th'
o.toOrdinal(12) // '12th'

o.toOrdinal(21) // '21st'
```

Getting only ordinal

``` javascript
o.ordinalSuffix(1) // 'st'
```

### TODO
Add unit test

Support additional language
