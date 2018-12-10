import Example from '../components/md/Example';

# Make app fullscreen

<Example reactnative>

```js
import React from 'react';
import { StatusBar } from 'react-native';

const SomeComponent = () => (
  <View>
    <StatusBar hidden={true} />
  </View>
);
```

</Example>

<Example flutter>

```dart
import 'package:flutter/services.dart';

void main() {
    SystemChrome.setEnabledSystemUIOverlays([]);
}
```

</Example>
