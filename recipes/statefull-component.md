import Example from '../components/md/Example';

# Statefull component

<Example reactnative>

```js
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class ComponentWithState extends React.Component {
  state = {
    counter: 0,
  };

  static propTypes = {
    counter: PropTypes.number.isRequired,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter++,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter--,
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
