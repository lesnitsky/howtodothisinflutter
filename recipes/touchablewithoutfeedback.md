import Example from '../components/md/Example';

<Example reactnative>

```js
<TouchableWithoutFeedback
  onPress={_onPress_}
  onLongPress={_onLongPress}
>
  <Text>Button</Text>
</TouchableWithoutFeedback>
```

</Example>

<Example flutter>

```dart
GestureDetector(
  onTap: _onTap,
  onLongPress: _onLongPress,
  child: Text('Button'),
);
```

</Example>
