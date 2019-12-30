import Example from '../components/md/Example';

<Example flutter>

```dart
class SomeWidget extends StatefulWidget {
  @override
  _SomeWidgetState createState() => _SomeWidgetState();
}

class _SomeWidgetState extends State<SomeWidget> {
  Future future;

  @override
  void initState() {
    future = Future.delayed(Duration(seconds: 1));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (context, snapshot) {
        return snapshot.connectionState == ConnectionState.done
            ? Text('Loaded')
            : CircularProgressIndicator();
      },
    );
  }
}
```

</Example>
