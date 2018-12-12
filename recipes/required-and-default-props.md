import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';

type Props = {
  foo: string,
  bar?: string,
};

const SomeComponent = (props: Props) => (
  <View>
    <Text>{`${props.foo} ${props.bar}`}</Text>
  </View>
);

SomeComponent.defaultProps = {
  bar: 'some string',
};
```

</Example>

<Example flutter>

```dart
import 'package:flutter/material.dart';

class SomeComponent extends StatelessWidget {
  SomeComponent({
    @required this.foo,
    this.bar = 'some string',
  });

  final String foo;
  final String bar;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('$foo $bar'),
    );
  }
}
```

</Example>
