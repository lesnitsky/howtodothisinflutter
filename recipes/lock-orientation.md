import Example from '../components/md/Example';

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
