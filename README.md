# nodejs-bing
Bing Scraper: text, image, video for nodejs

## Installation
```shell
npm install --save nodejs-bing
```

## Usage

### web
```js
// simple example
var bing = require('nodejs-bing')

bing.web('okedeh kakak').then(function(results) {
	console.log(results)
})

// advanced, using hack

bing.web('okedeh kakak', 'filetype:pdf').then(function(results) {
	console.log(results)
})
```
### image
```js
// simple
bing.image('okedeh kakak').then(function(results) {
	console.log(results)
})

// advanced
bing.image('okedeh kakak', '', [bing.filters.image.image_size.extra_large])
.then(function(results) {
	
	console.log(results)
})
```

### video
```js
bing.video('katak').then(function(results) {
	console.log(results)
})
```
