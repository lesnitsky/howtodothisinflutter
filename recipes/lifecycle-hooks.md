import Example from '../components/md/Example';

<Example flutter>

```dart
class _MyComponentState extends State<MyComponent> {
  @override
  void initState() {
    // this method is called before the first build
    super.initState();
  }

  @override
  void didUpdateWidget(MyComponent oldWidget) {
    // this method IS called when parent widget is rebuilt
    super.didUpdateWidget(oldWidget);
  }

  @override didChangeDependencies() {
    // called when InheritedWidget updates
    // read more here https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html
    super.didChangeDependencies();
  }

  @override
  void dispose() {
    // called after widget was unmounted from widget tree
    super.dispose();
  }
}
```

</Example>
