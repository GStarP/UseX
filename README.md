# UseX

UseX is a collection of hook utilities for quick and smart development.

`Hook utility` encapsulates a batch of reusable logic. It usually starts with `use`.

## Install

**Only for Browser!**

### NPM

```bash
npm i @gstarp/usex
```

Then you can directly import hook utilities and use.

```js
import { useMultipleClick } from '@gstarp/usex'
useMultipleClick(el, cb)
```

### Source

```bash
git clone git@github.com:GStarP/UseX.git
cd usex
npm i
npm run build
```

Then you can import `dist/usex.min.js` in `.html` file and acceess hook utilities by `UseX`.

```html
<script src="usex.min.js"></script>
<script>
  UseX.useMultipleClick(el, cb)
</script>
```
