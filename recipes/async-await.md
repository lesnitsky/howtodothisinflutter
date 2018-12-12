import Example from '../components/md/Example';

<Example reactnative>

```js
async function doSmthAsync() {
  const result = await Promise.resolve(42);
  return result;
}

class SomeClass {
  async method() {
    const result = await Promise.resolve(42);
    return result;
  }
}
```

</Example>

<Example flutter>

```dart
import 'dart:async';

Future<int> doSmthAsync() async {
  final result = await Future.value(42);
  return result;
}

class SomeClass {
  method() async {
    final result = await Future.value(42);
    return result;
  }
}
```

</Example>
