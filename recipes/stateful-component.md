import Example from '../components/md/Example';

# Stateful component

<Example reactnative>

```js
import React from 'react';
import { Button } from 'react-native';

type State = {
  counter: number,
};

class ComponentWithState extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <View>
        <Button onPress={this.increment} title="Increment" />
        <Button onPress={this.decrement} title="Decrement" />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}
```

</Example>

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
