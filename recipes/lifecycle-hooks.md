import Example from '../components/md/Example';

There are _some_ similarities between lifecycle hooks in react native and Flutter, but _do not treat them as 100% the same thing_. Find more info here:

- [initState](https://docs.flutter.io/flutter/widgets/State/initState.html)
- [didChangeDependencies](https://docs.flutter.io/flutter/widgets/State/didChangeDependencies.html)
- [didUpdateWidget](https://docs.flutter.io/flutter/widgets/State/didChangeDependencies.html)
- [dispose](https://docs.flutter.io/flutter/widgets/State/dispose.html)

<Example reactnative>

```js
class MyComponent extends React.Component<{}, {}> {
  //
  componentDidMount() {
    //
    // some code here
    //
  }

  componentDidUpdate(prevProps, prevState) {
    //
    //
    // some code here
    //
    //
  }

  //
  componentWillUnmount() {
    // some code here
    //
  }
}
```

</Example>

<Example flutter>

```dart
class _MyComponentState extends State<MyComponent> {
  @override
  void initState() {
    // unlike React this method is called _before_ the build
    super.initState();
  }

  @override
  void didUpdateWidget(MyComponent oldWidget) {
    // this method IS called when parent widget passed new "props"
    // unlike React, this method IS called _before_ the build
    // unlike React, this method receives OLD "props"
    // unlike React, this method ISN'T called after setState()
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    // some code here
    super.dispose();
  }
}
```

</Example>
