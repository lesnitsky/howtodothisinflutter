import Example from '../components/md/Example';

<Example flutter>

```dart
import 'package:flutter/material.dart';

class SomeWidget extends StatefulWidget {
  SomeWidget({@required this.fruit});

  final String fruit;

  @override
  _SomeWidgetState createState() => _SomeWidgetState();
}

class _SomeWidgetState extends State<SomeWidget> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('$count ${widget.fruit}'),
    );
  }
}

class ParentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: SomeWidget(fruit: 'oranges'),
    );
  }
}
```

</Example>
