import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

type State = {
  isLoading: boolean,
  data: number,
};

class SomeComponent extends React.PureComponent<{}, State> {
  state = {
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    Promise.resolve(42).then(data => {
      this.setState({
        data,
        isLoading: false,
      });
    });
  }

  render() {
    const content = this.state.isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <Text>{`${42}`}</Text>
    );

    return <View>{content}</View>;
  }
}
```

</Example>

<Example flutter>

```dart
class SomeWidget extends StatefulWidget {
  @override
  _SomeWidgetState createState() => _SomeWidgetState();
}

class _SomeWidgetState extends State<SomeWidget> {
  Future<int> future;

  @override
  void initState() {
    future = Future.value(42);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (BuildContext context, AsyncSnapshot<int> snapshot) {
        return snapshot.hasData
            ? Text('${snapshot.data}')
            : CircularProgressIndicator();
      },
    );
  }
}
```

</Example>
