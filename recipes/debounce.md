import Example from '../components/md/Example';

<Example reactnative>

```bash
npm i lodash.debounce --save
```

```js
import debounce from 'lodash.debounce';

debounce(someFN, 500);
```

</Example>

<Example flutter>

```dart
Timer _debounce;

if (_debounce?.isActive ?? false) _debounce.cancel();
_debounce = Timer(const Duration(milliseconds: 500), () {
    someFN();
});
```

</Example>
