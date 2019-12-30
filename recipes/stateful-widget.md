import Example from '../components/md/Example';

<Example flutter>

```dart
import 'package:flutter/material.dart';

class WidgetWithState extends StatefulWidget {
  @override
  _WidgetWithStateState createState() => _WidgetWithStateState();
}

class _WidgetWithStateState extends State<WidgetWithState> {
  int counter = 0;

  increment() {
    setState(() {
      counter++;
    });
  }

  decrement() {
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        FlatButton(onPressed: increment, child: Text('Increment')),
        FlatButton(onPressed: decrement, child: Text('Decrement')),
        Text(counter.toString()),
      ],
    );
  }
}
```

</Example>
