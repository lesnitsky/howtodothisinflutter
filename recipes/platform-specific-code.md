import Example from '../components/md/Example';

<Example reactnative>

```js
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
  doSmthIOSSpecific();
}

if (Platform.OS === 'android') {
  doSmthAndroidSpecific();
}
```

</Example>

<Example flutter>

```dart
import 'dart:io' show Platform;

if (Platform.isIOS) {
  doSmthIOSSpecific();
}

if (Platform.isAndroid) {
  doSmthAndroidSpecific();
}
```

</Example>
