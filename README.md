# egg-passport-cit

> Citi passport plugin for egg.

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-passport-citi.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-passport-citi)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-passport-citi/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-passport-citi)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[npm-image]: https://img.shields.io/npm/v/egg-passport-citi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-citi
[david-image]: https://img.shields.io/david/jeff-tian/egg-passport-citi.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-passport-citi
[snyk-image]: https://snyk.io/test/npm/egg-passport-citi/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-citi
[download-image]: https://img.shields.io/npm/dm/egg-passport-citi.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-citi

<!--
Description here.
-->

## Example

Open [https://uniheart.herokuapp.com/](https://uniheart.herokuapp.com/) to see the result.

## Install

```bash
$ npm i egg-passport-citi --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.passportCiti = {
  enable: true,
  package: "egg-passport-wechat-ts"
};
```

## Configuration

```js
// {app_root}/config/config.default.[t|j]s
exports.passportCiti = {
  key: "your oauth key",
  secret: "your oauth secret"
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:
