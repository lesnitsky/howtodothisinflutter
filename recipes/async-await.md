import Example from '../components/md/Example';

<Example flutter>

```dart
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
