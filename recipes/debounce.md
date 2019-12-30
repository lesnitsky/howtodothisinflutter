import Example from '../components/md/Example';

<Example flutter>

```dart
Timer _debounce;

if (_debounce?.isActive ?? false) _debounce.cancel();
_debounce = Timer(const Duration(milliseconds: 500), () {
    someFN();
});
```

</Example>
