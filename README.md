# js-ordinal

Simple utility to translate numeral to their english ordinal representation.

##

## Install

First of all, you need to have npm or yarn installed. Follow these steps, [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/), to install one of them.

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
### Documentation

You can know more about the project on the [npm website](https://www.npmjs.com/package/js-ordinal) and the [official website](https://GeekAb.github.io/js-ordinal/).

### TODO
- Add unit test

- Support additional language
