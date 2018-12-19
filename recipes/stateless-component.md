import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';

type Props = {
  name: string,
};

const Greeter = props => (
  <View>
    <Text>Hello, {props.name}</Text>
  </View>
);
```

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
