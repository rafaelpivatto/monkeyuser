<img src="https://www.monkeyuser.com/assets/images/logo.svg" width="150">

# MonkeyUser

**It`s a fan library to allow fetch random comic strip in [monkeyuser.com](https://www.monkeyuser.com/), as described by authors:**

> All in all it’s an effort of two inappropriate developers trying to make others laugh. MonkeyUser was created out of a desire to bring joy to people working in IT by making life a little less boring, but mostly because it’s a lot of fun for us.

## Features

- Fetch and return a random and single comic strip between 200+ comics in total.

## Installing

```bash
$ npm install monkeyuser
```

## Usage example

```js
const monkeyuser = require("monkeyuser");

monkeyuser
  .getRandomComic()
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
```

## Response example

```json
{
  "data": {
    "img": "https://www.monkeyuser.com/assets/images/2017/72-santas-smart-contract.png",
    "title": "Santa's Smart Contract",
    "link": "https://www.monkeyuser.com/2017/santas-smart-contract/",
    "pubDate": "Sun, 24 Dec 2017 02:00:00 +0200",
    "copyright": "https://www.monkeyuser.com/"
  },
  "success": true
}
```

### Copyright

All images rights reserved to [monkeyuser.com](https://www.monkeyuser.com/)
