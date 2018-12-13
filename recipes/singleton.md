import Example from '../components/md/Example';

<Example reactnative>

```js
class Singleton {
  static _instance;

  constructor() {
    if (Singleton._instance) {
      return Singleton._instance;
    }

    this.prop = 42;

    Singleton._instance = this;
  }
}
```

</Example>

<Example flutter>

```dart
class Singleton {
  static final Singleton _instance;

  final int prop;

  factory Singleton() {
    if (_instance != null) {
      return _instance;
    }

    _instance = new Singleton._internal();
  }

  Singleton._internal() {
    prop = 42;
  }
}
```

</Example>
