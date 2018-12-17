import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';

type Props = {
  name: string,
};

class Greeter extends React.PureComponent<Props, {}> {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}</Text>
      </View>
    );
  }
}
```

> PureComponent in react still can have state, but that's not the case for Flutter

</Example>

<Example flutter>

```dart
import 'package:flutter/material.dart';

class Greeter extends StatelessWidget {
  Greeter({@required this.name});

  String name;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello, $name'),
    );
  }
}
```

</Example>
