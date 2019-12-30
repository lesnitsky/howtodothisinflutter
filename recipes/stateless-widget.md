import Example from '../components/md/Example';

<Example flutter>

```dart
import 'package:flutter/material.dart';

class Greeter extends StatelessWidget {
  Greeter({Key key @required this.name}) : super(key: key);

  final String name;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello, $name'),
    );
  }
}
```

</Example>
