import Example from '../components/md/Example';

<Example flutter>

```dart
import 'package:flutter/material.dart';

void main() {
    runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hello world!',
      home: Scaffold(
        body: Center(
          child: Text('Hello world'),
        ),
      ),
    );
  }
}
```

</Example>
