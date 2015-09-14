# deku-modal [![Build Status](https://travis-ci.org/ulrikaugustsson/deku-modal.svg?branch=master)](https://travis-ci.org/ulrikaugustsson/deku-modal)

> Modal written in deku with a promise wrapper


## Install

```
$ npm install --save deku-modal
```


## Usage

```js
import dekuModal 'deku-modal';

dekuModal(DekuComponent).then(data => console.log(data)).catch(err => throw(err));

```


## API

### dekuModal(DekuComponent, [options])

#### DekuComponent

*Required*  
Type: `deku component`


## License

MIT © [Ulrik Augustsson](http://google.com)
