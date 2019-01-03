import Example from '../components/md/Example';

<Example reactnative>

```js
import React from 'react';

type Props = {
  fruit: string,
};

type State = {
  count: number,
};

class SomeComponent extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  render() {
    return (
      <View>
        <Text>
          {this.state.count} {this.prop.fruit}
        </Text>
      </View>
    );
  }
}

const ParentComponent = () => (
  <View>
    <SomeComponent fruit="oranges" />
  </View>
);
```

</Example>

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
