import Example from '../components/md/Example';

# Pure Component

<Example reactnative>

```js
import React from 'react';
import PropTypes from 'prop-types';

const Greeter = ({ name }) => (
  <View>
    <Text>Hello, {name}</Text>
  </View>
);

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
};
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
