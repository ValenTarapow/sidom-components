# sidom-components

A library of reusable React Native components for SIDOM apps, made using create-react-native-library
(https://reactnative.dev/docs/the-new-architecture/create-module-library)

## Installation

```sh
npm install sidom-components
```

## Usage


```js
import { multiply } from 'sidom-components';

// ...

const result = await multiply(3, 7);
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## To see example app

```sh
cd example
yarn android
```

## To publish it 

- Install the dependencies in your module yarn install.
- Build the library running yarn prepare.

```sh
yarn prepare
```

- Release it with yarn release.

```sh
yarn release
```