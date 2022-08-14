# TODO

Things should but can't.

## Reactive hooks can't support dist file

Reactive hooks rely on `@vue/reactivity`, which means this dependency should be imported in dist file.

However, we assume that people who choose the "dist file" method is unwilling to install dependencies via npm. So how to manage dependency relationships between dist files is still an unsolved problem.
