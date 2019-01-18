import Example from '../components/md/Example';

<Example reactnative>

```js
<TouchableNativeFeedback
  onPress={_onPress}
  onLongPress={_onLongPress}
>
  <Text>Button</Text>
</TouchableNativeFeedback>
```

</Example>

<Example flutter>

```dart
InkWell(
  child: Text('Button'),
  onTap: _onTap,
  onLongPress: _onLongPress,
  onDoubleTap: _onDoubleTap,
  onTapCancel: _onTapCancel,
);
```

</Example>
