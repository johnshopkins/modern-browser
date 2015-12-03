# window resize window

A module that determines if a browser is considered modern. For example, you could utilize [Modernizr](https://modernizr.com/) and pass the condition of `Modernizr.video`, which would add a class of `modern-browser` to the HTML element of browsers that support HTML5 video and `not-modern-browsers` for all others.

_Note: for best results, place this script in the `<head>` element._

### Usage

```javascript
var modernBrowser = require("modern-browser");
modernBrowser([condition]);
```

#### Example

```JavaScript
var modernBrowser = require("modern-browser");
modernBrowser(Modernizr.video);
```
