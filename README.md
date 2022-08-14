# UseX

UseX is a collection of hook utilities for quick and smart development.

`Hook utility` encapsulates a batch of reusable logic. It usually starts with `use`.

## Install

**Only for Browser Env!**

### NPM

```bash
npm i @gstarp/usex
```

Then you can directly import hook utilities and use.

```js
import { useMultipleClick } from '@gstarp/usex'
useMultipleClick(el, cb)
```

### Dist File

You can build source code to get dist file, which is also included in the package installed via npm.

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

## Reactive Hook

Hooks in `reactive` dir can provide reactive variants for your reactive rendering. They are based on `@vue/reactivity`, so you must install this dependency to use reactive hooks.

> Make sure the version of `vue` and `@vue/reactivity` is the same, otherwise you will have to do some extra work.

You can also use reactive hooks even if you don't install `vue`, which means you can use them along with `react` or whatever. I will write an example to prove it's feasibility.
