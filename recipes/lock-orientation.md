import Example from '../components/md/Example';

<Example reactnative>

There is no way to lock device orientation directly from react-native, so you should do this in native android and iOS config or with help of [this module](https://github.com/yamill/react-native-orientation)

</Example>

<Example flutter>

```dart
import 'package:flutter/services.dart';

void main() async {
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  runApp(App());
}
```

</Example>
